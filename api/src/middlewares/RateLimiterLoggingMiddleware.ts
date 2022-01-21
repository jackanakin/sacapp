import { Request, Response } from "express";

export default async (req: Request, res: Response): Promise<Response> => {
    const current_datetime = new Date();
    const formatted_date =
        current_datetime.getFullYear() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" +
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();
    const log = `[${formatted_date}] BAN:${req.sourceSocket.address}:${req.sourceSocket.port}`;

    console.log(log);
    return res.status(429).json("Too many requests, please try again later.");
};
