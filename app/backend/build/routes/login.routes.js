"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_model_1 = __importDefault(require("../models/users.model"));
const login_services_1 = __importDefault(require("../services/login.services"));
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
const router = (0, express_1.Router)();
const UsersM = new users_model_1.default();
const LoginS = new login_services_1.default(UsersM);
const LoginC = new login_controller_1.default(LoginS);
router.post('/', LoginC.SignIn);
exports.default = router;
