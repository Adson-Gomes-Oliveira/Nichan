"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus_1 = __importDefault(require("../helpers/HttpStatus"));
class LoginController {
    constructor(_services) {
        this._services = _services;
        this.SignIn = this.SignIn.bind(this);
    }
    SignIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            const result = yield this._services.SignIn(payload);
            return res.status(HttpStatus_1.default.OK).json({
                token: result,
            });
        });
    }
}
exports.default = LoginController;
