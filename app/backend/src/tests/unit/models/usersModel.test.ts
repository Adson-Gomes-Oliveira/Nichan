import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import {
  USER_INSTANCE_MOCK,
  USER_INSTANCE_MOCK_WITH_ID
} from '../../mock';

const { expect } = chai;

describe('[ 01 ] Unit tests for: Users Model', () => {
  const newUsersModel = new UsersModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(USER_INSTANCE_MOCK);
    sinon.stub(Model, 'find').resolves([USER_INSTANCE_MOCK_WITH_ID]);
    sinon.stub(Model, 'findOne').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(USER_INSTANCE_MOCK_WITH_ID);
    sinon.stub(Model, 'findByIdAndDelete').resolves(USER_INSTANCE_MOCK_WITH_ID);
  });

  it('Create is possible with mongoose', async () => {});
  it('Get all is possible with mongoose', async () => {});
  it('Get One is possible with mongoose', async () => {});
  it('Update is possible with mongoose', async () => {});
  it('Delete is possible with mongoose', async () => {});
});