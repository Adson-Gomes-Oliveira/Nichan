"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JSONWebToken {
    static createToken(user) {
        console.log(process.env.JWT_SECRET);
        const token = jsonwebtoken_1.default.sign({ data: user }, process.env.JWT_SECRET, {
            expiresIn: '1h',
            algorithm: 'HS256',
        });
        return token;
    }
    static checkToken(token) {
        const { data } = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return data;
    }
}
exports.default = JSONWebToken;
