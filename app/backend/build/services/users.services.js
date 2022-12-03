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
const user_interface_1 = __importDefault(require("./../interfaces/user.interface"));
const ErrorMessages_1 = __importDefault(require("../helpers/ErrorMessages"));
const HttpStatus_1 = __importDefault(require("../helpers/HttpStatus"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UsersServices {
    constructor(_model) {
        this._model = _model;
    }
    ;
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = user_interface_1.default.safeParse(payload);
            if (!validation.success) {
                const err = new Error(validation.error.message);
                err.name = ErrorMessages_1.default.PAYLOAD_INCORRECT;
                err.stack = HttpStatus_1.default.BAD_REQUEST.toString();
                throw err;
            }
            const encryptedPassword = yield bcrypt_1.default.hash(payload.password, 10);
            payload.password = encryptedPassword;
            const request = yield this._model.create(payload);
            return request;
        });
    }
    ;
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this._model.read({});
            return request;
        });
    }
    ;
    findOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this._model.readOne(_id);
            if (!request) {
                const err = new Error('');
                err.name = ErrorMessages_1.default.OBJECT_NOT_EXIST;
                err.stack = HttpStatus_1.default.NOT_FOUND.toString();
                throw err;
            }
            return request;
        });
    }
    ;
    update(_id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = user_interface_1.default.safeParse(payload);
            if (!validation.success) {
                const err = new Error(validation.error.message);
                err.name = ErrorMessages_1.default.PAYLOAD_INCORRECT;
                err.stack = HttpStatus_1.default.BAD_REQUEST.toString();
                throw err;
            }
            const request = yield this._model.update(_id, payload);
            if (!request) {
                const err = new Error('');
                err.name = ErrorMessages_1.default.OBJECT_NOT_EXIST;
                err.stack = HttpStatus_1.default.NOT_FOUND.toString();
                throw err;
            }
            return request;
        });
    }
    ;
    delete(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this._model.delete(_id);
            if (!request) {
                const err = new Error('');
                err.name = ErrorMessages_1.default.OBJECT_NOT_EXIST;
                err.stack = HttpStatus_1.default.NOT_FOUND.toString();
                throw err;
            }
            return request;
        });
    }
    ;
}
exports.default = UsersServices;
