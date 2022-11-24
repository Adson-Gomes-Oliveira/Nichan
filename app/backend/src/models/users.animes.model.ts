import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IUserAnime } from '../interfaces/user.animes.interface';
import MongoModel from './mongo.model';

const userAnimesMongooseSchema = new Schema<IUserAnime>({
  anime_id: String,
  episodes: Array,
  watched_eps: Number,
  favorite: Boolean,
  watching: Boolean,
  rating: Number,
  started: String,
  finished: String,
}, { versionKey: false });

class UserAnimesModel extends MongoModel<IUserAnime> {
  constructor(public model = mongooseCreateModel('UserAnimes', userAnimesMongooseSchema)) {
    super(model);
  }
}

export default UserAnimesModel;
