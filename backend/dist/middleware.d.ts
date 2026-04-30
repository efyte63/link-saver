import type { Request, Response, NextFunction } from "express";
interface CustomRequest extends Request {
    userId?: string;
}
export default function middleware(req: CustomRequest, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=middleware.d.ts.map