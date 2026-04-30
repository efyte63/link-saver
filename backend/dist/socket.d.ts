import http from "http";
declare const app: import("express-serve-static-core").Express;
declare const server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
declare const io: any;
declare function returnsocketid(userid: string): string | undefined;
export { app, io, server, returnsocketid };
//# sourceMappingURL=socket.d.ts.map