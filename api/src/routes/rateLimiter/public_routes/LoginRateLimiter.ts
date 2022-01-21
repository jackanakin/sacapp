import { Request, Response } from "express";
const rateLimit = require("express-rate-limit");

import LoginRateConfig from "../../../config/rateLimiter/LoginRateConfig";
import RateLimiterLoggingMiddleware from "../../../middlewares/RateLimiterLoggingMiddleware";

export const LoginRateLimiter = rateLimit({
    windowMs: LoginRateConfig.windowMs, // 1 minute
    max: LoginRateConfig.max,
    handler: function handler(req: Request, res: Response) {
        return RateLimiterLoggingMiddleware(req, res);
    },
});