import { Router } from "express";

import SignInController from "../controllers/SignInController";

import homeRouter from "./private/home.routes";
import signupRouter from "./public/signup.routes";

import sessionValidatorMiddleware from "../middlewares/SessionValidatorMiddleware";
import { LoginRateLimiter } from "./rateLimiter/public_routes/LoginRateLimiter";
import { PrivateRoutesRateLimiter } from "./rateLimiter/private_routes/PrivateRoutesRateLimiter";

const router = Router();

/**
 * Public routes only
 */
router.use("/signup", LoginRateLimiter, signupRouter);
router.post("/signin", SignInController.store);

/**
 * Authentication middleware
 */
router.use(sessionValidatorMiddleware);

/**
 * From now on, only authenticated users routes
 */
router.use(PrivateRoutesRateLimiter);
router.use('/home', homeRouter);


export default router;
