import { Router } from "express";
import SignUpController from "../../controllers/SignUpController";

const router = Router();

router.post("/", SignUpController.store);

export default router;
