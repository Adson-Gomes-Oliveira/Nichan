"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userZodSchema = zod_1.z.object({
    nickName: zod_1.z.string().min(3).max(16),
    fullName: zod_1.z.string().min(3),
    birthDate: zod_1.z.string(),
    picture: zod_1.z.string().optional(),
    email: zod_1.z.string(),
    password: zod_1.z.string().min(8),
    gender: zod_1.z.enum(['male', 'female', 'transgender', 'non-binary']),
    user_animes_list: zod_1.z.string().min(24).max(24).array().optional(),
});
exports.default = userZodSchema;
