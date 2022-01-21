import { RateLimiterConfig } from "../_ts/RateLimiterConfig";

export default {
    max: 3,
    windowMs: 60 * 60 * 1000
} as RateLimiterConfig;
