"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_model_1 = __importDefault(require("../models/comments.model"));
const comments_services_1 = __importDefault(require("../services/comments.services"));
const comments_controller_1 = __importDefault(require("../controllers/comments.controller"));
const router = (0, express_1.Router)();
const UserM = new comments_model_1.default();
const UserS = new comments_services_1.default(UserM);
const UserC = new comments_controller_1.default(UserS);
router.get('/', UserC.findAll);
router.get('/:id', UserC.findOne);
router.post('/register', UserC.create);
router.put('/edit/:id', UserC.update);
router.delete('/delete/:id', UserC.delete);
exports.default = router;
