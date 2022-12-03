"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongo_model_1 = __importDefault(require("./mongo.model"));
const userMongooseSchema = new mongoose_1.Schema({
    nickName: String,
    fullName: String,
    birthDate: Date,
    picture: String,
    email: String,
    password: String,
    gender: String,
    user_animes_list: Array,
}, { versionKey: false });
class UsersModel extends mongo_model_1.default {
    constructor(model = (0, mongoose_1.model)('User', userMongooseSchema)) {
        super(model);
        this.model = model;
    }
}
exports.default = UsersModel;
