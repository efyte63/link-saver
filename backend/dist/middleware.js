import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const jwtSign = process.env.jwtSign;
export default function middleware(req, res, next) {
    const token = req.cookies?.jwt;
    if (!token) {
        return res.status(401).json({
            message: "No token provided",
        });
    }
    try {
        const decoded = jwt.verify(token, jwtSign);
        req.userId = decoded.id;
        next();
    }
    catch (err) {
        return res.status(403).json({
            message: "Invalid token",
        });
    }
}
//# sourceMappingURL=middleware.js.map