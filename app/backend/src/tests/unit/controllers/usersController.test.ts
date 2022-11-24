import Sinon, * as sinon from 'sinon';
import { Request, Response } from 'express';
import chai from 'chai';
import UsersModel from '../../../models/users.model';
import UsersServices from '../../../services/users.services';
import UsersController from '../../../controllers/users.controller';
import {
  USER_INSTANCE_MOCK,
  USER_INSTANCE_MOCK_WITH_ID,
  WRONG_ID_MOCK,
  WRONG_USER_INSTANCE,
} from '../../mock';
import { IUser } from './../../../interfaces/user.interface';
import HttpStatus from '../../../helpers/HttpStatus';

const { expect } = chai;

describe('[ 05 ] Unit tests for: Users Controller', () => {
  const newUserModel = new UsersModel();
  const newUserServices = new UsersServices(newUserModel);
  const newUserController = new UsersController(newUserServices);
  const req = {
    params: {},
  } as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(newUserServices, 'create').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newUserServices, 'findAll').resolves([USER_INSTANCE_MOCK_WITH_ID]);
    sinon.stub(newUserServices, 'findOne').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newUserServices, 'update').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newUserServices, 'delete').resolves(USER_INSTANCE_MOCK_WITH_ID);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  it('Create is possible and throws the 201 status', async () => {
    req.body = USER_INSTANCE_MOCK;
    await newUserController.create(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.CREATED)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(USER_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Get all is possible throws the 200 status', async () => {
    await newUserController.findAll(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.OK)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(USER_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Get one is possible throws the 200 status', async () => {
    req.params.id = USER_INSTANCE_MOCK_WITH_ID._id; 
    await newUserController.findOne(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.OK)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(USER_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Update is possible and throws the 201 status', async () => {
    req.body = USER_INSTANCE_MOCK;
    req.params.id = USER_INSTANCE_MOCK_WITH_ID._id;
    await newUserController.update(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.CREATED)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(USER_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Delete is possible throws the 200 status', async () => {
    req.params.id = USER_INSTANCE_MOCK_WITH_ID._id; 
    await newUserController.delete(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.DELETED)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(USER_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });
});