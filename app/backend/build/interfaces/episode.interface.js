"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const comment_interface_1 = __importDefault(require("./comment.interface"));
const episodeZodSchema = zod_1.z.object({
    number: zod_1.z.number().int(),
    duration: zod_1.z.string(),
    image: zod_1.z.string().optional(),
    comments: zod_1.z.array(comment_interface_1.default),
});
exports.default = episodeZodSchema;
