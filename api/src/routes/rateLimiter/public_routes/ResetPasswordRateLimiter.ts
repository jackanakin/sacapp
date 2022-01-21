import { Request, Response } from "express";
const rateLimit = require("express-rate-limit");

import ResetPasswordRateConfig from "../../../config/rateLimiter/ResetPasswordRateConfig";
import RateLimiterLoggingMiddleware from "../../../middlewares/RateLimiterLoggingMiddleware";

export const ResetPasswordRateLimiter = rateLimit({
    windowMs: ResetPasswordRateConfig.windowMs,
    max: ResetPasswordRateConfig.max,
    handler: function handler(req: Request, res: Response) {
        return RateLimiterLoggingMiddleware(req, res);
    },
});