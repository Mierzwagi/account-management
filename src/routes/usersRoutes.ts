import { Router } from "express";
import { signInUser, signUpUser } from "../controllers/user/user";

export const routerUser = Router();

routerUser.post('/signUp', signUpUser);
routerUser.post('/signIn', signInUser);