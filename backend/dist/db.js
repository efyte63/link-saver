import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Mongo_url = process.env.MONGO_URL;
await mongoose
    .connect(Mongo_url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error:", err));
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
});
export const UserModel = mongoose.model("User", userSchema);
const contentSchema = new mongoose.Schema({
    title: {
        type: String
    },
    linktype: {
        type: String
    },
    link: {
        type: String
    },
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tag"
        }
    ],
    description: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});
export const ContentModel = mongoose.model("Content", contentSchema);
const linkSchema = new mongoose.Schema({
    hash: {
        type: String,
        unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});
export const LinkModel = mongoose.model("Link", linkSchema);
const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    reciverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    text: {
        type: String,
    },
}, { timestamps: true });
export const MessageModel = mongoose.model("message", messageSchema);
//# sourceMappingURL=db.js.map