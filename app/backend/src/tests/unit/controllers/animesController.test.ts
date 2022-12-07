import Sinon, * as sinon from 'sinon';
import { Request, Response } from 'express';
import chai from 'chai';
import UserAnimesModel from '../../../models/animes.model';
import UserAnimesServices from '../../../services/animes.services';
import UserAnimesController from '../../../controllers/animes.controller';
import {
  USER_ANIMES_INSTANCE_MOCK,
  USER_ANIMES_INSTANCE_MOCK_WITH_ID,
} from '../../mock';
import HttpStatus from '../../../helpers/HttpStatus';

const { expect } = chai;

describe('[ 06 ] Unit tests for: User Animes Controller', () => {
  const newUserAnimesModel = new UserAnimesModel();
  const newUserAnimesServices = new UserAnimesServices(newUserAnimesModel);
  const newUserAnimesController = new UserAnimesController(newUserAnimesServices);
  const req = {
    params: {},
  } as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(newUserAnimesServices, 'create').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newUserAnimesServices, 'findAll').resolves([USER_ANIMES_INSTANCE_MOCK_WITH_ID]);
    sinon.stub(newUserAnimesServices, 'findOne').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newUserAnimesServices, 'update').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newUserAnimesServices, 'delete').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  it('Create is possible and throws the 201 status', async () => {
    req.body = USER_ANIMES_INSTANCE_MOCK;
    await newUserAnimesController.create(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.CREATED)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(USER_ANIMES_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Get all is possible throws the 200 status', async () => {
    await newUserAnimesController.findAll(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.OK)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(USER_ANIMES_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Get one is possible throws the 200 status', async () => {
    req.params.id = USER_ANIMES_INSTANCE_MOCK_WITH_ID._id; 
    await newUserAnimesController.findOne(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.OK)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(USER_ANIMES_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Update is possible and throws the 201 status', async () => {
    req.body = USER_ANIMES_INSTANCE_MOCK;
    req.params.id = USER_ANIMES_INSTANCE_MOCK_WITH_ID._id;
    await newUserAnimesController.update(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.CREATED)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(USER_ANIMES_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Delete is possible throws the 200 status', async () => {
    req.params.id = USER_ANIMES_INSTANCE_MOCK_WITH_ID._id; 
    await newUserAnimesController.delete(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.DELETED)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(USER_ANIMES_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });
});