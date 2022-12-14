import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IUser } from './../interfaces/user.interface';
import MongoModel from './mongo.model';

const userMongooseSchema = new Schema<IUser>({
  tag: String,
  fullName: String,
  birthDate: String,
  picture: String,
  aboutMe: String,
  email: String,
  password: String,
  gender: String,
  showFavorites: Boolean,
  socialMedia: {
    instagram: String,
    amino: String,
    tiktok: String,
  },
  anime_list: Array,
  achievements: Array,
  memberSince: String,
}, { versionKey: false });

class UsersModel extends MongoModel<IUser> {
  constructor(public model = mongooseCreateModel('User', userMongooseSchema)) {
    super(model);
  }
}

export default UsersModel;
