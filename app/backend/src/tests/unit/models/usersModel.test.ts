import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import UsersModel from '../../../models/users.model';
import { INVALID_ID_ERROR } from './../../../models/mongo.model';
import {
  USER_INSTANCE_MOCK,
  USER_INSTANCE_MOCK_WITH_ID,
  WRONG_ID_MOCK,
} from '../../mock';
import HttpStatus from '../../../helpers/HttpStatus';

const { expect } = chai;

describe('[ 01 ] Unit tests for: Users Model', () => {
  const newUsersModel = new UsersModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'find').resolves([USER_INSTANCE_MOCK_WITH_ID]);
    sinon.stub(Model, 'findOne').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'findByIdAndDelete').resolves(USER_INSTANCE_MOCK_WITH_ID);
  });

  it('Create is possible with mongoose', async () => {
    const creatingUser = await newUsersModel.create(USER_INSTANCE_MOCK);
    expect(creatingUser).to.be.deep.equal(USER_INSTANCE_MOCK_WITH_ID);
  });
  it('Get all is possible with mongoose', async () => {
    const getUsers = await newUsersModel.read();
    expect(getUsers).to.be.deep.equal([USER_INSTANCE_MOCK_WITH_ID]);
  });
  it('Get One is possible with mongoose', async () => {
    const getOneUser = await newUsersModel.readOne(USER_INSTANCE_MOCK_WITH_ID._id);
    expect(getOneUser).to.be.deep.equal(USER_INSTANCE_MOCK_WITH_ID);
  });
  it('Get One is impossible with mongoose when the id is invalid', async () => {
    let errorToTest = null;

    try {
      await newUsersModel.readOne(WRONG_ID_MOCK);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.message).to.be.equal(INVALID_ID_ERROR);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });
  it('Update is possible with mongoose', async () => {
    const updateUser = await newUsersModel.update(USER_INSTANCE_MOCK_WITH_ID._id, USER_INSTANCE_MOCK);
    expect(updateUser).to.be.deep.equal(USER_INSTANCE_MOCK_WITH_ID);
  });
  it('Update is impossible with mongoose when the id is invalid', async () => {
    let errorToTest = null;

    try {
      await newUsersModel.readOne(WRONG_ID_MOCK);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.message).to.be.equal(INVALID_ID_ERROR);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });
  it('Delete is possible with mongoose', async () => {
    const deleteUser = await newUsersModel.delete(USER_INSTANCE_MOCK_WITH_ID._id);
    expect(deleteUser).to.be.deep.equal(USER_INSTANCE_MOCK_WITH_ID);
  });
  it('Delete is impossible with mongoose when the id is invalid', async () => {
    let errorToTest = null;

    try {
      await newUsersModel.readOne(WRONG_ID_MOCK);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.message).to.be.equal(INVALID_ID_ERROR);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });
});