import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IUser } from './../interfaces/user.interface';
import MongoModel from './mongo.model';

const userMongooseSchema = new Schema<IUser>({
  nickName: String,
  fullName: String,
  birthDate: Date,
  picture: String,
  email: String,
  password: String,
  gender: String,
  user_animes_list: Array,
}, { versionKey: false });

class UsersModel extends MongoModel<IUser> {
  constructor(public model = mongooseCreateModel('User', userMongooseSchema)) {
    super(model);
  }
}

export default UsersModel;
