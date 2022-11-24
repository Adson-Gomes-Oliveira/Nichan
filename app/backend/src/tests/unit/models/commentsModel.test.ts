import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import ErrorMessages from '../../../helpers/ErrorMessages';
import {
  WRONG_ID_MOCK,
  COMMENT_INSTANCE_MOCK,
  COMMENT_INSTANCE_MOCK_WITH_ID,
} from '../../mock';
import HttpStatus from '../../../helpers/HttpStatus';
import CommentsModel from '../../../models/comments.model';

const { expect } = chai;

describe('[ 07 ] Unit tests for: Comments Model', () => {
  const newCommentsModel = new CommentsModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'find').resolves([COMMENT_INSTANCE_MOCK_WITH_ID]);
    sinon.stub(Model, 'findOne').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'findByIdAndDelete').resolves(COMMENT_INSTANCE_MOCK_WITH_ID);
  });

  after(() => {
    sinon.restore();
  });

  it('Create is possible with mongoose', async () => {
    const request = await newCommentsModel.create(COMMENT_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(COMMENT_INSTANCE_MOCK_WITH_ID);
  });

  it('Get all is possible with mongoose', async () => {
    const request = await newCommentsModel.read();
    expect(request).to.be.deep.equal([COMMENT_INSTANCE_MOCK_WITH_ID]);
  });

  it('Get One is possible with mongoose', async () => {
    const request = await newCommentsModel.readOne(COMMENT_INSTANCE_MOCK_WITH_ID._id);
    expect(request).to.be.deep.equal(COMMENT_INSTANCE_MOCK_WITH_ID);
  });

  it('Get One is impossible with mongoose when the id is invalid', async () => {
    let errorToTest = null;

    try {
      await newCommentsModel.readOne(WRONG_ID_MOCK);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.message).to.be.equal(ErrorMessages.INVALID_ID_ERROR);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Update is possible with mongoose', async () => {
    const request = await newCommentsModel.update(COMMENT_INSTANCE_MOCK_WITH_ID._id, COMMENT_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(COMMENT_INSTANCE_MOCK_WITH_ID);
  });

  it('Update is impossible with mongoose when the id is invalid', async () => {
    let errorToTest = null;

    try {
      await newCommentsModel.update(WRONG_ID_MOCK, COMMENT_INSTANCE_MOCK);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.message).to.be.equal(ErrorMessages.INVALID_ID_ERROR);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Delete is possible with mongoose', async () => {
    const request = await newCommentsModel.delete(COMMENT_INSTANCE_MOCK_WITH_ID._id);
    expect(request).to.be.deep.equal(COMMENT_INSTANCE_MOCK_WITH_ID);
  });

  it('Delete is impossible with mongoose when the id is invalid', async () => {
    let errorToTest = null;

    try {
      await newCommentsModel.delete(WRONG_ID_MOCK);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.message).to.be.equal(ErrorMessages.INVALID_ID_ERROR);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });
});