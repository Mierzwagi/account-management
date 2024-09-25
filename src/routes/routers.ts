import { Router } from "express";
import { signInUser, signUpUser } from "../controllers/user/user";

export const router = Router();

router.post('/signUp', signUpUser);
router.post('/signIn', signInUser);