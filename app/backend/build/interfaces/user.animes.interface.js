"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const episode_interface_1 = __importDefault(require("./episode.interface"));
const userAnimeZodSchema = zod_1.z.object({
    anime_id: zod_1.z.string(),
    episodes: zod_1.z.array(episode_interface_1.default).optional(),
    watched_eps: zod_1.z.number().int().array().optional(),
    favorite: zod_1.z.boolean(),
    watching: zod_1.z.boolean(),
    rating: zod_1.z.number().int().lte(5),
    started_at: zod_1.z.string(),
    finished_at: zod_1.z.string(),
});
exports.default = userAnimeZodSchema;
