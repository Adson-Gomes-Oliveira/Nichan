import { IComment } from './../../interfaces/comment.interface';
import { IUserAnime } from '../../interfaces/user.animes.interface';
import { IUser } from './../../interfaces/user.interface';

export const WRONG_ID_MOCK = '6073-7bde-2e93-9791ceda1fe5';

export const WRONG_COMMENT_INSTANCE_MOCK = {
  user_id: '62261a65d66c6be0a63c051f',
  anime_id: '6073-7bde-2e93-9791ceda1fe5',
  episode: 5
}

export const COMMENT_INSTANCE_MOCK: IComment = {
  user_id: '62261a65d66c6be0a63c051f',
  anime_id: '6073-7bde-2e93-9791ceda1fe5',
  episode: 5,
  comment: 'comment test',
  rating: 4
}

export const COMMENT_INSTANCE_MOCK_WITH_ID = {
  _id: '62261a65d66c6be0a63c051f',
  user_id: '62261a65d66c6be0a63c051f',
  anime_id: '6073-7bde-2e93-9791ceda1fe5',
  episode: 5,
  comment: 'comment test',
  rating: 4
}

export const WRONG_USER_ANIMES_INSTANCE = {
  anime_id: '6073-7bde-2e93-9791ceda1fe5',
  favorite: false,
  watching: true,
  rating: 4
}

export const USER_ANIMES_INSTANCE_MOCK: IUserAnime = {
  anime_id: '6073-7bde-2e93-9791ceda1fe5',
  episodes: [],
  watched_eps: [],
  favorite: false,
  watching: true,
  rating: 4,
  started_at: '2022/09/24',
  finished_at: '2022/11/24',
}

export const USER_ANIMES_INSTANCE_MOCK_WITH_ID = {
  _id: '62261a65d66c6be0a63c051f',
  anime_id: '6073-7bde-2e93-9791ceda1fe5',
  episodes: [],
  watched_eps: [],
  favorite: false,
  watching: true,
  rating: 4,
  started_at: '2022/09/24',
  finished_at: '2022/11/24',
}

export const WRONG_USER_INSTANCE = {
  nickName: 'LordCroftTR',
  fullName: 'Adson Gomes Oliveira',
  birthDate: '2000/10/10',
  email: 'adsongoliveira2022@outlook.com'
};

export const USER_INSTANCE_MOCK: IUser = {
  nickName: 'LordCroftTR',
  fullName: 'Adson Gomes Oliveira',
  birthDate: '2000/10/10',
  email: 'adsongoliveira2022@outlook.com',
  password: '454ds5dfv131fvdfsd5fd5s2',
  gender: 'female',
  user_animes_list: [],
};

export const USER_INSTANCE_MOCK_WITH_ID = {
  _id: '62261a65d66c6be0a63c051f',
  nickName: 'LordCroftTR',
  fullName: 'Adson Gomes Oliveira',
  birthDate: '2000/10/10',
  email: 'adsongoliveira2022@outlook.com',
  password: '454ds5dfv131fvdfsd5fd5s2',
  gender: 'male',
  user_animes_list: [
    'lo54267c-6073-7bde-2e93-9791ceda1fe5',
    'bu54267c-6577-7bde-2e93-9791ceda1fe5'
  ],
} as any;