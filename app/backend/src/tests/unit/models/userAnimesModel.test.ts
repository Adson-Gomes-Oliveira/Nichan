import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import ErrorMessages from '../../../helpers/ErrorMessages';
import {
  WRONG_ID_MOCK,
  USER_ANIMES_INSTANCE_MOCK,
  USER_ANIMES_INSTANCE_MOCK_WITH_ID,
} from '../../mock';
import HttpStatus from '../../../helpers/HttpStatus';
import UserAnimesModel from '../../../models/users.animes.model';

const { expect } = chai;

describe('[ 02 ] Unit tests for: Users Animes Model', () => {
  const newUserAnimesModel = new UserAnimesModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'find').resolves([USER_ANIMES_INSTANCE_MOCK_WITH_ID]);
    sinon.stub(Model, 'findOne').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'findByIdAndDelete').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  after(() => {
    sinon.restore();
  });

  it('Create is possible with mongoose', async () => {
    const request = await newUserAnimesModel.create(USER_ANIMES_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  it('Get all is possible with mongoose', async () => {
    const request = await newUserAnimesModel.read();
    expect(request).to.be.deep.equal([USER_ANIMES_INSTANCE_MOCK_WITH_ID]);
  });

  it('Get One is possible with mongoose', async () => {
    const request = await newUserAnimesModel.readOne(USER_ANIMES_INSTANCE_MOCK_WITH_ID._id);
    expect(request).to.be.deep.equal(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  it('Get One is impossible with mongoose when the id is invalid', async () => {
    let errorToTest = null;

    try {
      await newUserAnimesModel.readOne(WRONG_ID_MOCK);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.message).to.be.equal(ErrorMessages.INVALID_ID_ERROR);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Update is possible with mongoose', async () => {
    const request = await newUserAnimesModel.update(USER_ANIMES_INSTANCE_MOCK_WITH_ID._id, USER_ANIMES_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  it('Update is impossible with mongoose when the id is invalid', async () => {
    let errorToTest = null;

    try {
      await newUserAnimesModel.update(WRONG_ID_MOCK, USER_ANIMES_INSTANCE_MOCK);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.message).to.be.equal(ErrorMessages.INVALID_ID_ERROR);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Delete is possible with mongoose', async () => {
    const request = await newUserAnimesModel.delete(USER_ANIMES_INSTANCE_MOCK_WITH_ID._id);
    expect(request).to.be.deep.equal(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  it('Delete is impossible with mongoose when the id is invalid', async () => {
    let errorToTest = null;

    try {
      await newUserAnimesModel.delete(WRONG_ID_MOCK);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.message).to.be.equal(ErrorMessages.INVALID_ID_ERROR);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });
});