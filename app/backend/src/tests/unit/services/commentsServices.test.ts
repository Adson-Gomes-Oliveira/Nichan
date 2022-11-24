import * as sinon from 'sinon';
import chai from 'chai';
import CommentsModel from '../../../models/comments.model';
import ErrorMessages from '../../../helpers/ErrorMessages';
import CommentsServices from '../../../services/comments.services';
import {
  COMMENT_INSTANCE_MOCK,
  WRONG_COMMENT_INSTANCE_MOCK,
  COMMENT_INSTANCE_MOCK_WITH_ID
} from '../../mock';
import { IComment } from '../../../interfaces/comment.interface';
import HttpStatus from '../../../helpers/HttpStatus';

const { expect } = chai;

describe('[ 08 ] Unit tests for: Comments Services', () => {
  const newCommentsModel = new CommentsModel();
  const newCommentsServices = new CommentsServices(newCommentsModel);

  before(() => {
    sinon.stub(newCommentsModel, 'create').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newCommentsModel, 'read').resolves([COMMENT_INSTANCE_MOCK_WITH_ID]);
    sinon.stub(newCommentsModel, 'readOne').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newCommentsModel, 'update').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newCommentsModel, 'delete').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
  });

  after(() => {
    sinon.restore();
  });

  it('Create is possible when the payload is correct', async () => {
    const request = await newCommentsServices.create(COMMENT_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(COMMENT_INSTANCE_MOCK_WITH_ID);
  });

  it('Create is impossible when the payload is incorrect', async () => {
    let errorToTest;

    try {
      await newCommentsServices.create(WRONG_COMMENT_INSTANCE_MOCK as IComment);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.name).to.be.equal(ErrorMessages.PAYLOAD_INCORRECT);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Get all is possible', async () => {
    const request = await newCommentsServices.findAll();
    expect(request).to.be.deep.equal([COMMENT_INSTANCE_MOCK_WITH_ID]);
  });

  it('Get one is possible', async () => {
    const request = await newCommentsServices.findOne(COMMENT_INSTANCE_MOCK_WITH_ID._id);
    expect(request).to.be.deep.equal(COMMENT_INSTANCE_MOCK_WITH_ID);
  });

  it('Update is possible when the payload is correct', async () => {
    const request = await newCommentsServices.update(COMMENT_INSTANCE_MOCK_WITH_ID._id, COMMENT_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(COMMENT_INSTANCE_MOCK_WITH_ID);
  });

  it('Update is impossible when the payload is incorrect', async () => {
    let errorToTest;

    try {
      await newCommentsServices.update(COMMENT_INSTANCE_MOCK_WITH_ID._id, WRONG_COMMENT_INSTANCE_MOCK as IComment);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.name).to.be.equal(ErrorMessages.PAYLOAD_INCORRECT);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Delete is possible', async () => {
    const request = await newCommentsServices.delete(COMMENT_INSTANCE_MOCK_WITH_ID._id);
    expect(request).to.be.deep.equal(COMMENT_INSTANCE_MOCK_WITH_ID);
  });
});