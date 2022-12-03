"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const commentZodSchema = zod_1.z.object({
    user_id: zod_1.z.string(),
    anime_id: zod_1.z.string(),
    episode: zod_1.z.number().optional(),
    comment: zod_1.z.string(),
    rating: zod_1.z.number().min(1).max(5).optional(),
});
exports.default = commentZodSchema;
