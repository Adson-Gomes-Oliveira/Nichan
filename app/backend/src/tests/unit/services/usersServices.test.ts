import * as sinon from 'sinon';
import chai from 'chai';
import UsersModel from '../../../models/users.model';
import ErrorMessages from '../../../helpers/ErrorMessages';
import UsersServices from '../../../services/users.services';
import {
  USER_INSTANCE_MOCK,
  USER_INSTANCE_MOCK_WITH_ID,
  WRONG_ID_MOCK,
  WRONG_USER_INSTANCE,
} from '../../mock';
import { IUser } from './../../../interfaces/user.interface';
import HttpStatus from '../../../helpers/HttpStatus';

const { expect } = chai;

describe('[ 02 ] Unit tests for: Users Services', () => {
  const newMongoModel = new UsersModel();
  const newUserServices = new UsersServices(newMongoModel);

  before(() => {
    sinon.stub(newMongoModel, 'create').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newMongoModel, 'read').resolves([USER_INSTANCE_MOCK_WITH_ID]);
    sinon.stub(newMongoModel, 'readOne').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newMongoModel, 'update').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newMongoModel, 'delete').resolves(USER_INSTANCE_MOCK_WITH_ID);
  });

  after(() => {
    sinon.restore();
  });

  it('Create is possible when the payload is correct', async () => {
    const request = await newUserServices.create(USER_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(USER_INSTANCE_MOCK_WITH_ID);
  });

  it('Create is impossible when the payload is incorrect', async () => {
    let errorToTest;

    try {
      await newUserServices.create(WRONG_USER_INSTANCE as IUser);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.name).to.be.equal(ErrorMessages.PAYLOAD_INCORRECT);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Get all is possible', async () => {
    const request = await newUserServices.findAll();
    expect(request).to.be.deep.equal([USER_INSTANCE_MOCK_WITH_ID]);
  });

  it('Get one is possible', async () => {
    const request = await newUserServices.findOne(USER_INSTANCE_MOCK_WITH_ID._id);
    expect(request).to.be.deep.equal(USER_INSTANCE_MOCK_WITH_ID);
  });

  it('Update is possible when the payload is correct', async () => {
    const request = await newUserServices.update(USER_INSTANCE_MOCK_WITH_ID._id, USER_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(USER_INSTANCE_MOCK_WITH_ID);
  });

  it('Update is impossible when the payload is incorrect', async () => {
    let errorToTest;

    try {
      await newUserServices.update(USER_INSTANCE_MOCK_WITH_ID._id, WRONG_USER_INSTANCE as IUser);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.name).to.be.equal(ErrorMessages.PAYLOAD_INCORRECT);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Delete is possible', async () => {
    const request = await newUserServices.delete(USER_INSTANCE_MOCK_WITH_ID._id);
    expect(request).to.be.deep.equal(USER_INSTANCE_MOCK_WITH_ID);
  });
});