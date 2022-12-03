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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const login_interface_1 = __importDefault(require("./../interfaces/login.interface"));
const JSONWebToken_1 = __importDefault(require("../helpers/JSONWebToken"));
const HttpStatus_1 = __importDefault(require("../helpers/HttpStatus"));
const ErrorMessages_1 = __importDefault(require("../helpers/ErrorMessages"));
class LoginServices {
    constructor(_model) {
        this._model = _model;
    }
    SignIn(loginInfos) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = login_interface_1.default.safeParse(loginInfos);
            if (!validation.success) {
                const err = new Error(validation.error.message);
                err.name = ErrorMessages_1.default.PAYLOAD_INCORRECT;
                err.stack = HttpStatus_1.default.BAD_REQUEST.toString();
                throw err;
            }
            const { email, password } = loginInfos;
            console.log(loginInfos);
            const userToLogin = yield this._model.read({ email });
            console.log(userToLogin);
            if (userToLogin.length === 0) {
                const err = new Error(ErrorMessages_1.default.NO_USER);
                err.name = 'NO_USER';
                err.stack = HttpStatus_1.default.BAD_REQUEST.toString();
                throw err;
            }
            const verifyPassword = yield bcrypt_1.default.compare(password, userToLogin[0].password);
            if (!verifyPassword) {
                const err = new Error(ErrorMessages_1.default.WRONG_PASSWORD);
                err.name = 'WRONG_PASSWORD';
                err.stack = HttpStatus_1.default.BAD_REQUEST.toString();
                throw err;
            }
            const _a = userToLogin[0], { password: _ } = _a, noPasswordUser = __rest(_a, ["password"]);
            const token = JSONWebToken_1.default.createToken(noPasswordUser);
            return token;
        });
    }
}
exports.default = LoginServices;
