"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMessages_1 = __importDefault(require("../helpers/ErrorMessages"));
const HttpStatus_1 = __importDefault(require("../helpers/HttpStatus"));
const JSONWebToken_1 = __importDefault(require("../helpers/JSONWebToken"));
class AuthMiddleware {
    static verifyToken(req, res, next) {
        const tokenAUTH = req.headers.authorization;
        if (!tokenAUTH) {
            const err = new Error(ErrorMessages_1.default.UNAUTHORIZED);
            err.name = 'UNAUTHORIZED';
            err.stack = HttpStatus_1.default.UNAUTHORIZED.toString();
        }
        const user = JSONWebToken_1.default.checkToken(tokenAUTH);
        res.locals.user = user;
        next();
    }
}
exports.default = AuthMiddleware;
