import { NextFunction, Request, Response } from "express";
import { getNowFormattedDate } from "../functions/GetNowFormattedDate";

export default async (req: Request, res: Response, next: NextFunction) => {
  const current_datetime = getNowFormattedDate();
  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
  const portAddress = req.connection.remotePort || req.connection.localPort || 0;

  const method = req.method;
  const url = req.url;
  const status = res.statusCode;

  const log = `[${current_datetime}] ${method}:${url} ${status} from ${ipAddress}:${portAddress}`;
  console.log(log);

  req.sourceSocket = { address: String(ipAddress), port: portAddress };
  return next();
};
