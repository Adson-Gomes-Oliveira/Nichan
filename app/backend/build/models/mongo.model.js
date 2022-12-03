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
const mongoose_1 = require("mongoose");
const HttpStatus_1 = __importDefault(require("../helpers/HttpStatus"));
const ErrorMessages_1 = __importDefault(require("../helpers/ErrorMessages"));
class MongoModel {
    constructor(_model) {
        this._model = _model;
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.create(Object.assign({}, payload));
        });
    }
    read(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.find(query);
        });
    }
    readOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, mongoose_1.isObjectIdOrHexString)(_id)) {
                const err = new Error(ErrorMessages_1.default.INVALID_ID_ERROR);
                err.name = 'INVALID_ID';
                err.stack = HttpStatus_1.default.BAD_REQUEST.toString();
                throw err;
            }
            return this._model.findOne({ _id });
        });
    }
    update(_id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, mongoose_1.isObjectIdOrHexString)(_id)) {
                const err = new Error(ErrorMessages_1.default.INVALID_ID_ERROR);
                err.name = 'INVALID_ID';
                err.stack = HttpStatus_1.default.BAD_REQUEST.toString();
                throw err;
            }
            return this._model.findByIdAndUpdate({ _id }, Object.assign({}, payload), { new: true });
        });
    }
    delete(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, mongoose_1.isObjectIdOrHexString)(_id)) {
                const err = new Error(ErrorMessages_1.default.INVALID_ID_ERROR);
                err.name = 'INVALID_ID';
                err.stack = HttpStatus_1.default.BAD_REQUEST.toString();
                throw err;
            }
            return this._model.findByIdAndDelete({ _id });
        });
    }
}
exports.default = MongoModel;
