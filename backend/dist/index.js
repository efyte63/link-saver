import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import cors from 'cors';
import cookieParser from "cookie-parser";
import { UserModel, ContentModel, LinkModel, MessageModel } from "./db.js";
import middleware from "./middleware.js";
import { app, server, io, returnsocketid } from "./socket.js";
import dotenv from "dotenv";
import { log } from "console";
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
dotenv.config();
app.use(express.json());
app.use(cookieParser());
const jwtSign = process.env.jwtSign;
/* ================= SIGNUP ================= */
app.post("/app/v1/signup", async (req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");
    try {
        await UserModel.create({
            username,
            password: hashedPassword,
            email
        });
        return res.status(200).json({
            message: "User signed up",
        });
    }
    catch (e) {
        return res.status(411).json({
            message: "User already exists",
        });
    }
});
/* ================= SIGNIN ================= */
app.post("/app/v1/signin", async (req, res) => {
    const { password, email } = req.body;
    console.log(password, email);
    const hashedPassword = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");
    const user = await UserModel
        .findOne({
        password: hashedPassword,
        email
    })
        .select("-password");
    if (!user) {
        return res.status(403).json({
            message: "Wrong username or password",
        });
    }
    const token = jwt.sign({
        id: user._id,
    }, jwtSign);
    res.cookie("jwt", token);
    return res.status(200).json({
        user,
    });
});
/* ================= LOGOUT ================= */
app.post("/app/v1/logout", middleware, (req, res) => {
    const userid = req.userId;
    res.clearCookie("jwt");
    return res.status(200).json({
        message: "Logged out successfully",
    });
});
/* ================= GET CONTENT ================= */
app.get("/app/v1/content", middleware, async (req, res) => {
    const id = req.userId;
    if (!id) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    const contents = await ContentModel.find({
        userId: new mongoose.Types.ObjectId(id),
    }).populate("userId", "username");
    return res.json({
        content: contents,
    });
});
/* ================= ADD CONTENT ================= */
app.post("/app/v1/content", middleware, async (req, res) => {
    try {
        const userId = req.userId;
        const { link, title, description, linktype } = req.body;
        if (!userId) {
            return res.status(401).json({
                msg: "Unauthorized",
            });
        }
        if (!link) {
            return res.status(400).json({
                msg: "Link is required",
            });
        }
        const content = await ContentModel.create({
            link,
            title,
            linktype,
            description,
            userId: new mongoose.Types.ObjectId(userId),
            tags: [],
        });
        return res.status(200).json({
            msg: "Content added",
            content,
        });
    }
    catch (err) {
        return res.status(500).json({
            msg: "Something went wrong",
        });
    }
});
/* ================= DELETE CONTENT ================= */
app.post("/app/v1/delete", middleware, async (req, res) => {
    const userId = req.userId;
    const contentId = req.body.contentid;
    if (!userId) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    try {
        const result = await ContentModel.deleteOne({
            _id: contentId,
            userId: userId
        });
        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Content not found or not authorized",
            });
        }
        return res.json({
            message: "Content deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Error deleting content",
        });
    }
});
app.get("/app/v1/Brain/shareLink", middleware, async (req, res) => {
    const id = req.userId;
    if (!id) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const sharelink = await LinkModel.findOne({
        userId: id
    });
    if (sharelink) {
        return res.json({
            link: sharelink.hash
        });
    }
    else {
        const link = crypto.createHash("sha256").update(id).digest("hex");
        const share = await LinkModel.create({
            userId: id,
            hash: link
        });
        return res.json({
            link: link
        });
    }
});
app.post("/app/v1/Brain/shareLink", middleware, async (req, res) => {
    const { hash } = req.body;
    const search = await LinkModel.findOne({
        hash: hash
    });
    if (!search) {
        return res.json({
            message: "link is invalid"
        });
    }
    if (!search.userId) {
        return res.status(400).json({
            message: "Invalid userId in link"
        });
    }
    const getcontent = await ContentModel.find({
        userId: search.userId
    });
    return res.json({
        getcontent
    });
});
/* ================= SEARCH ================= */
app.get("/search", middleware, async (req, res) => {
    try {
        const { query } = req.query;
        const userId = req.userId;
        if (!query) {
            return res.status(400).json({ message: "Query is required" });
        }
        // Fix query type (important in TS)
        const searchQuery = Array.isArray(query) ? query[0] : query;
        const results = await ContentModel.aggregate([
            {
                $search: {
                    compound: {
                        should: [
                            {
                                autocomplete: {
                                    query: searchQuery,
                                    path: "title"
                                }
                            }
                        ],
                        minimumShouldMatch: 1,
                        filter: [
                            {
                                equals: {
                                    path: "userId",
                                    value: new mongoose.Types.ObjectId(userId)
                                }
                            }
                        ]
                    }
                }
            }
        ]);
        res.json(results);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
//////////==================messageRoutes==============/////////////
//////////getmsg////////////////////
app.get("/getmessage", middleware, async (req, res) => {
    const userId = req.userId;
    const reciverid = String(req.query.reciverid);
    const messages = await MessageModel.find({
        $or: [
            { senderId: userId, reciverId: reciverid },
            { senderId: reciverid, reciverId: userId },
        ],
    });
    return res.status(200).json({
        messages: messages || [],
    });
});
//////////////////getusers//////////////////
app.get("/getusers", middleware, async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const users = await UserModel.find({ _id: { $ne: userId } }).select("username _id");
        return res.status(200).json({ users: users });
    }
    catch (error) {
        return res.status(400).json({ message: "Error fetching users", });
    }
});
/////////sendmsg///////////////
app.post("/sendmsg", middleware, async (req, res) => {
    console.log("sendingmessage is working");
    const userid = req.userId;
    const { reciverid, text } = req.body;
    if (!userid || !reciverid || !text) {
        return res.status(400).json({ message: "Missing fields" });
    }
    const message = await MessageModel.create({
        senderId: userid,
        reciverId: reciverid,
        text: text,
    });
    const getreciverssocketid = returnsocketid(reciverid);
    if (getreciverssocketid) {
        console.log(message);
        io.to(getreciverssocketid).emit("messagesend", message);
    }
    return res.status(200).json({
        message,
    });
});
server.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=index.js.map