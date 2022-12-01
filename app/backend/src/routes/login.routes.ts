import { Router } from "express";
import UsersModel from "../models/users.model";
import LoginServices from "../services/login.services";
import LoginController from "../controllers/login.controller";

const router = Router();

const UsersM = new UsersModel();
const LoginS = new LoginServices(UsersM);
const LoginC = new LoginController(LoginS);

router.post('/', LoginC.SignIn);

export default router;
