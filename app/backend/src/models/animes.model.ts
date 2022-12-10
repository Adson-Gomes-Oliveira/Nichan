import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IAnime } from '../interfaces/anime.interface';
import MongoModel from './mongo.model';

const animesMongooseSchema = new Schema<IAnime>({
  anime_external_id: String,
  title: String,
  cover: String,
  genres: Array,
  studios: Array,
  status: String,
  description: String,
  totalEpisodes: Number,
  episodes: Array,
  releaseDate: String,
  rating: Number,
  comments: Array,
}, { versionKey: false });

class AnimesModel extends MongoModel<IAnime> {
  constructor(public model = mongooseCreateModel('Animes', animesMongooseSchema)) {
    super(model);
  }
}

export default AnimesModel;
