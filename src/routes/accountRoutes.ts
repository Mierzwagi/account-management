import { Router } from "express";
import { createAccount, getAccounts } from "../controllers/accouts/account";

export const routerAccount = Router();

routerAccount.post('/accounts', createAccount);
routerAccount.get('/accounts', getAccounts);