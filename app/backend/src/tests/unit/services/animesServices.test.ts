import * as sinon from 'sinon';
import chai from 'chai';
import UserAnimesModel from '../../../models/animes.model';
import ErrorMessages from '../../../helpers/ErrorMessages';
import UserAnimesServices from '../../../services/animes.services';
import {
  ANIMES_INSTANCE_MOCK,
  WRONG_ANIMES_INSTANCE,
  ANIMES_INSTANCE_MOCK_WITH_ID
} from '../../mock';
import { IAnime } from '../../../interfaces/anime.interface';
import HttpStatus from '../../../helpers/HttpStatus';

const { expect } = chai;

describe('[ 04 ] Unit tests for: Animes Services', () => {
  const newMongoModel = new UserAnimesModel();
  const newUserAnimesServices = new UserAnimesServices(newMongoModel);

  before(() => {
    sinon.stub(newMongoModel, 'create').resolves(ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newMongoModel, 'read')
      .onFirstCall().resolves([])
      .onSecondCall().resolves([ANIMES_INSTANCE_MOCK_WITH_ID]);

    sinon.stub(newMongoModel, 'readOne').resolves(ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newMongoModel, 'update').resolves(ANIMES_INSTANCE_MOCK_WITH_ID);
    sinon.stub(newMongoModel, 'delete').resolves(ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  after(() => {
    sinon.restore();
  });

  it('Create is possible when the payload is correct', async () => {
    const request = await newUserAnimesServices.create(ANIMES_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  it('Create is impossible when the payload is incorrect', async () => {
    let errorToTest;

    try {
      await newUserAnimesServices.create(WRONG_ANIMES_INSTANCE as unknown as IAnime);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.name).to.be.equal(ErrorMessages.PAYLOAD_INCORRECT);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Get all is possible', async () => {
    const request = await newUserAnimesServices.findAll();
    expect(request).to.be.deep.equal([ANIMES_INSTANCE_MOCK_WITH_ID]);
  });

  it('Get one is possible', async () => {
    const request = await newUserAnimesServices.findOne(ANIMES_INSTANCE_MOCK_WITH_ID.anime_id);
    expect(request).to.be.deep.equal(ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  it('Update is possible when the payload is correct', async () => {
    const request = await newUserAnimesServices.update(ANIMES_INSTANCE_MOCK_WITH_ID.anime_id, ANIMES_INSTANCE_MOCK);
    expect(request).to.be.deep.equal(ANIMES_INSTANCE_MOCK_WITH_ID);
  });

  it('Update is impossible when the payload is incorrect', async () => {
    let errorToTest;

    try {
      await newUserAnimesServices.update(ANIMES_INSTANCE_MOCK_WITH_ID.anime_id, WRONG_ANIMES_INSTANCE as unknown as IAnime);
    } catch (error: any) {
      errorToTest = error;
    }

    expect(errorToTest.name).to.be.equal(ErrorMessages.PAYLOAD_INCORRECT);
    expect(Number(errorToTest.stack)).to.be.equal(HttpStatus.BAD_REQUEST);
  });

  it('Delete is possible', async () => {
    const request = await newUserAnimesServices.delete(ANIMES_INSTANCE_MOCK_WITH_ID.anime_id);
    expect(request).to.be.deep.equal(ANIMES_INSTANCE_MOCK_WITH_ID);
  });
});