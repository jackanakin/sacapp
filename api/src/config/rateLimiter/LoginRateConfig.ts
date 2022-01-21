import { RateLimiterConfig } from "../_ts/RateLimiterConfig";

export default {
    max: 10,
    windowMs: 60 * 60 * 1000
} as RateLimiterConfig;
