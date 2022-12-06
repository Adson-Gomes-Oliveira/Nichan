import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IAnime } from '../interfaces/anime.interface';
import MongoModel from './mongo.model';

const animesMongooseSchema = new Schema<IAnime>({
  anime_id: String,
  episodes: Array,
  rating: Number,
  comments: Array,
}, { versionKey: false });

class AnimesModel extends MongoModel<IAnime> {
  constructor(public model = mongooseCreateModel('Animes', animesMongooseSchema)) {
    super(model);
  }
}

export default AnimesModel;
