"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongo_model_1 = __importDefault(require("./mongo.model"));
const commentsMongooseSchema = new mongoose_1.Schema({
    user_id: String,
    anime_id: String,
    episode: Number,
    comment: String,
    rating: Number,
}, { versionKey: false });
class CommentsModel extends mongo_model_1.default {
    constructor(model = (0, mongoose_1.model)('Comments', commentsMongooseSchema)) {
        super(model);
        this.model = model;
    }
}
exports.default = CommentsModel;
