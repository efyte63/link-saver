import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

const jwtSign = "dhgcshgsdhj";

interface CustomRequest extends Request {
  userId?: string;
}

export default function middleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.jwt;

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, jwtSign) as { id: string };

    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({
      message: "Invalid token",
    });
  }
}