import Sinon, * as sinon from 'sinon';
import { Request, Response } from 'express';
import chai from 'chai';
import CommentsModel from '../../../models/comments.model';
import CommentsServices from '../../../services/comments.services';
import CommentsController from '../../../controllers/comments.controller';
import {
  COMMENT_INSTANCE_MOCK,
  COMMENT_INSTANCE_MOCK_WITH_ID,
} from '../../mock';
import HttpStatus from '../../../helpers/HttpStatus';

const { expect } = chai;

describe('[ 08 ] Unit tests for: Comments Controller', () => {
  const newCommentsModel = new CommentsModel();
  const newCommentsServices = new CommentsServices(newCommentsModel);
  const newCommentsController = new CommentsController(newCommentsServices);
  const req = {
    params: {},
  } as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(newCommentsServices, 'create').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newCommentsServices, 'findAll').resolves([COMMENT_INSTANCE_MOCK_WITH_ID]);
    sinon.stub(newCommentsServices, 'findOne').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newCommentsServices, 'update').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newCommentsServices, 'delete').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  it('Create is possible and throws the 201 status', async () => {
    req.body = COMMENT_INSTANCE_MOCK;
    await newCommentsController.create(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.CREATED)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(COMMENT_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Get all is possible throws the 200 status', async () => {
    await newCommentsController.findAll(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.OK)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(COMMENT_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Get one is possible throws the 200 status', async () => {
    req.params.id = COMMENT_INSTANCE_MOCK_WITH_ID._id; 
    await newCommentsController.findOne(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.OK)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(COMMENT_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Update is possible and throws the 201 status', async () => {
    req.body = COMMENT_INSTANCE_MOCK;
    req.params.id = COMMENT_INSTANCE_MOCK_WITH_ID._id;
    await newCommentsController.update(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.CREATED)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(COMMENT_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });

  it('Delete is possible throws the 200 status', async () => {
    req.params.id = COMMENT_INSTANCE_MOCK_WITH_ID._id; 
    await newCommentsController.delete(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatus.DELETED)).to.be.true;
    expect((res.json as Sinon.SinonStub).calledWith(COMMENT_INSTANCE_MOCK_WITH_ID)).to.be.true;
  });
});