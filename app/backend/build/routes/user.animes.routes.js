"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_animes_model_1 = __importDefault(require("../models/users.animes.model"));
const user_animes_services_1 = __importDefault(require("../services/user.animes.services"));
const user_animes_controller_1 = __importDefault(require("../controllers/user.animes.controller"));
const router = (0, express_1.Router)();
const UserM = new users_animes_model_1.default();
const UserS = new user_animes_services_1.default(UserM);
const UserC = new user_animes_controller_1.default(UserS);
router.get('/', UserC.findAll);
router.get('/:id', UserC.findOne);
router.post('/register', UserC.create);
router.put('/edit/:id', UserC.update);
router.delete('/delete/:id', UserC.delete);
exports.default = router;
