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
const users_animes_model_1 = __importDefault(require("../../../models/users.animes.model"));
const user_animes_services_1 = __importDefault(require("../../../services/user.animes.services"));
const user_animes_controller_1 = __importDefault(require("../../../controllers/user.animes.controller"));
const mock_1 = require("../../mock");
const HttpStatus_1 = __importDefault(require("../../../helpers/HttpStatus"));
const { expect } = chai_1.default;
describe('[ 06 ] Unit tests for: User Animes Controller', () => {
    const newUserAnimesModel = new users_animes_model_1.default();
    const newUserAnimesServices = new user_animes_services_1.default(newUserAnimesModel);
    const newUserAnimesController = new user_animes_controller_1.default(newUserAnimesServices);
    const req = {
        params: {},
    };
    const res = {};
    before(() => {
        sinon.stub(newUserAnimesServices, 'create').resolves(mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID);
        sinon.stub(newUserAnimesServices, 'findAll').resolves([mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID]);
        sinon.stub(newUserAnimesServices, 'findOne').resolves(mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID);
        sinon.stub(newUserAnimesServices, 'update').resolves(mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID);
        sinon.stub(newUserAnimesServices, 'delete').resolves(mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });
    after(() => {
        sinon.restore();
    });
    it('Create is possible and throws the 201 status', () => __awaiter(void 0, void 0, void 0, function* () {
        req.body = mock_1.USER_ANIMES_INSTANCE_MOCK;
        yield newUserAnimesController.create(req, res);
        expect(res.status.calledWith(HttpStatus_1.default.CREATED)).to.be.true;
        expect(res.json.calledWith(mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID)).to.be.true;
    }));
    it('Get all is possible throws the 200 status', () => __awaiter(void 0, void 0, void 0, function* () {
        yield newUserAnimesController.findAll(req, res);
        expect(res.status.calledWith(HttpStatus_1.default.OK)).to.be.true;
        expect(res.json.calledWith(mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID)).to.be.true;
    }));
    it('Get one is possible throws the 200 status', () => __awaiter(void 0, void 0, void 0, function* () {
        req.params.id = mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID._id;
        yield newUserAnimesController.findOne(req, res);
        expect(res.status.calledWith(HttpStatus_1.default.OK)).to.be.true;
        expect(res.json.calledWith(mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID)).to.be.true;
    }));
    it('Update is possible and throws the 201 status', () => __awaiter(void 0, void 0, void 0, function* () {
        req.body = mock_1.USER_ANIMES_INSTANCE_MOCK;
        req.params.id = mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID._id;
        yield newUserAnimesController.update(req, res);
        expect(res.status.calledWith(HttpStatus_1.default.CREATED)).to.be.true;
        expect(res.json.calledWith(mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID)).to.be.true;
    }));
    it('Delete is possible throws the 200 status', () => __awaiter(void 0, void 0, void 0, function* () {
        req.params.id = mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID._id;
        yield newUserAnimesController.delete(req, res);
        expect(res.status.calledWith(HttpStatus_1.default.DELETED)).to.be.true;
        expect(res.json.calledWith(mock_1.USER_ANIMES_INSTANCE_MOCK_WITH_ID)).to.be.true;
    }));
});
