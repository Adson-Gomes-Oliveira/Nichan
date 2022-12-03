"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongo_model_1 = __importDefault(require("./mongo.model"));
const userAnimesMongooseSchema = new mongoose_1.Schema({
    anime_id: String,
    episodes: Array,
    watched_eps: Array,
    favorite: Boolean,
    watching: Boolean,
    rating: Number,
    started_at: String,
    finished_at: String,
}, { versionKey: false });
class UserAnimesModel extends mongo_model_1.default {
    constructor(model = (0, mongoose_1.model)('UserAnimes', userAnimesMongooseSchema)) {
        super(model);
        this.model = model;
    }
}
exports.default = UserAnimesModel;
