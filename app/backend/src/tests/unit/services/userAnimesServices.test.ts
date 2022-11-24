import * as sinon from 'sinon';
import chai from 'chai';
import UserAnimesModel from '../../../models/users.animes.model';
import ErrorMessages from '../../../helpers/ErrorMessages';
import UserAnimesServices from '../../../services/user.animes.services';
import {
  USER_ANIMES_INSTANCE_MOCK,
  WRONG_USER_ANIMES_INSTANCE,
  USER_ANIMES_INSTANCE_MOCK_WITH_ID
} from '../../mock';
import { IUserAnime } from '../../../interfaces/user.animes.interface';
import HttpStatus from '../../../helpers/HttpStatus';

const { expect } = chai;

describe('[ 04 ] Unit tests for: Users Animes Services', () => {
  const newMongoModel = new UserAnimesModel();
  const newUserAnimesServices = new UserAnimesServices(newMongoModel);

  before(() => {
    sinon.stub(newMongoModel, 'create').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newMongoModel, 'read').resolves([USER_ANIMES_INSTANCE_MOCK_WITH_ID]);
    sinon.stub(newMongoModel, 'readOne').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newMongoModel, 'update').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newMongoModel, 'delete').resolves(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  after(() => {
    sinon.restore();
  });

  it('Create is possible when the payload is correct', async () => {
    const request = await newUserAnimesServices.create(USER_ANIMES_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  it('Create is impossible when the payload is incorrect', async () => {
    let errorToTest;

    try {
      await newUserAnimesServices.create(WRONG_USER_ANIMES_INSTANCE as IUserAnime);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.name).to.be.equal(ErrorMessages.PAYLOAD_INCORRECT);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Get all is possible', async () => {
    const request = await newUserAnimesServices.findAll();
    expect(request).to.be.deep.equal([USER_ANIMES_INSTANCE_MOCK_WITH_ID]);
  });

  it('Get one is possible', async () => {
    const request = await newUserAnimesServices.findOne(USER_ANIMES_INSTANCE_MOCK_WITH_ID._id);
    expect(request).to.be.deep.equal(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  it('Update is possible when the payload is correct', async () => {
    const request = await newUserAnimesServices.update(USER_ANIMES_INSTANCE_MOCK_WITH_ID._id, USER_ANIMES_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  it('Update is impossible when the payload is incorrect', async () => {
    let errorToTest;

    try {
      await newUserAnimesServices.update(USER_ANIMES_INSTANCE_MOCK_WITH_ID._id, WRONG_USER_ANIMES_INSTANCE as IUserAnime);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.name).to.be.equal(ErrorMessages.PAYLOAD_INCORRECT);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Delete is possible', async () => {
    const request = await newUserAnimesServices.delete(USER_ANIMES_INSTANCE_MOCK_WITH_ID._id);
    expect(request).to.be.deep.equal(USER_ANIMES_INSTANCE_MOCK_WITH_ID);
  });
});