import { NextFunction, Response, Request } from "express";
import MyError from "../models/enums/MyError";
import { getNowFormattedDate } from "../functions/GetNowFormattedDate";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const date = getNowFormattedDate();
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(MyError.invalidToken.code)
        .json({ error: MyError.invalidToken.message });
    }

    const [, token] = authHeader.split(" ");

    return next();
  } catch (err) {
    return res
      .status(MyError.expiredToken.code)
      .json({ error: MyError.expiredToken.message });
  }
};