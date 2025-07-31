import express from "express";
import { postSignIn, postSignup } from "../controllers/user.js";
const router = express.Router();

router.post("/signup", postSignup);
router.post("/signin", postSignIn);

export default router;
