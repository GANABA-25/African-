import { Router } from "express";
import authController from "./auth.controller.ts";

const router = Router();

router.post("/signin", authController.signin);
router.post("/signup", authController.signup);

export default router;
