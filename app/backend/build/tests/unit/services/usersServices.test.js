"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const sinon = __importStar(require("sinon"));
const chai_1 = __importDefault(require("chai"));
const users_model_1 = __importDefault(require("../../../models/users.model"));
const ErrorMessages_1 = __importDefault(require("../../../helpers/ErrorMessages"));
const users_services_1 = __importDefault(require("../../../services/users.services"));
const mock_1 = require("../../mock");
const HttpStatus_1 = __importDefault(require("../../../helpers/HttpStatus"));
const { expect } = chai_1.default;
describe('[ 03 ] Unit tests for: Users Services', () => {
    const newMongoModel = new users_model_1.default();
    const newUserServices = new users_services_1.default(newMongoModel);
    before(() => {
        sinon.stub(newMongoModel, 'create').resolves(mock_1.USER_INSTANCE_MOCK_WITH_ID);
        sinon.stub(newMongoModel, 'read').resolves([mock_1.USER_INSTANCE_MOCK_WITH_ID]);
        sinon.stub(newMongoModel, 'readOne').resolves(mock_1.USER_INSTANCE_MOCK_WITH_ID);
        sinon.stub(newMongoModel, 'update').resolves(mock_1.USER_INSTANCE_MOCK_WITH_ID);
        sinon.stub(newMongoModel, 'delete').resolves(mock_1.USER_INSTANCE_MOCK_WITH_ID);
    });
    after(() => {
        sinon.restore();
    });
    it('Create is possible when the payload is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = yield newUserServices.create(mock_1.USER_INSTANCE_MOCK);
        expect(request).to.be.deep.equal(mock_1.USER_INSTANCE_MOCK_WITH_ID);
    }));
    it('Create is impossible when the payload is incorrect', () => __awaiter(void 0, void 0, void 0, function* () {
        let errorToTest;
        try {
            yield newUserServices.create(mock_1.WRONG_USER_INSTANCE);
        }
        catch (error) {
            errorToTest = error;
        }
        expect(errorToTest.name).to.be.equal(ErrorMessages_1.default.PAYLOAD_INCORRECT);
        expect(Number(errorToTest.stack)).to.be.equal(HttpStatus_1.default.BAD_REQUEST);
    }));
    it('Get all is possible', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = yield newUserServices.findAll();
        expect(request).to.be.deep.equal([mock_1.USER_INSTANCE_MOCK_WITH_ID]);
    }));
    it('Get one is possible', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = yield newUserServices.findOne(mock_1.USER_INSTANCE_MOCK_WITH_ID._id);
        expect(request).to.be.deep.equal(mock_1.USER_INSTANCE_MOCK_WITH_ID);
    }));
    it('Update is possible when the payload is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = yield newUserServices.update(mock_1.USER_INSTANCE_MOCK_WITH_ID._id, mock_1.USER_INSTANCE_MOCK);
        expect(request).to.be.deep.equal(mock_1.USER_INSTANCE_MOCK_WITH_ID);
    }));
    it('Update is impossible when the payload is incorrect', () => __awaiter(void 0, void 0, void 0, function* () {
        let errorToTest;
        try {
            yield newUserServices.update(mock_1.USER_INSTANCE_MOCK_WITH_ID._id, mock_1.WRONG_USER_INSTANCE);
        }
        catch (error) {
            errorToTest = error;
        }
        expect(errorToTest.name).to.be.equal(ErrorMessages_1.default.PAYLOAD_INCORRECT);
        expect(Number(errorToTest.stack)).to.be.equal(HttpStatus_1.default.BAD_REQUEST);
    }));
    it('Delete is possible', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = yield newUserServices.delete(mock_1.USER_INSTANCE_MOCK_WITH_ID._id);
        expect(request).to.be.deep.equal(mock_1.USER_INSTANCE_MOCK_WITH_ID);
    }));
});
