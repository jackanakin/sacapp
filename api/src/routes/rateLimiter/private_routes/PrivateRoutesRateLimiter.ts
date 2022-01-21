import { Request, Response } from "express";
const rateLimit = require("express-rate-limit");

import PrivateRoutesRateConfig from "../../../config/rateLimiter/PrivateRoutesRateConfig";
import RateLimiterLoggingMiddleware from "../../../middlewares/RateLimiterLoggingMiddleware";

export const PrivateRoutesRateLimiter = rateLimit({
    windowMs: PrivateRoutesRateConfig.windowMs, // 1 minute
    max: PrivateRoutesRateConfig.max,
    handler: function handler(req: Request, res: Response) {
        return RateLimiterLoggingMiddleware(req, res);
    },
});