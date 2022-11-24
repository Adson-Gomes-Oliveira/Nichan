import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IComment } from '../interfaces/comment.interface';
import MongoModel from './mongo.model';

const commentsMongooseSchema = new Schema<IComment>({
  user_id: String,
  anime_id: String,
  episode: Number,
  comment: String,
  rating: Number,
}, { versionKey: false });

class CommentsModel extends MongoModel<IComment> {
  constructor(public model = mongooseCreateModel('Comments', commentsMongooseSchema)) {
    super(model);
  }
}

export default CommentsModel;
