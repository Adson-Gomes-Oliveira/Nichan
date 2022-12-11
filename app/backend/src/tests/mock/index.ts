import { IComment } from './../../interfaces/comment.interface';
import { IAnime } from '../../interfaces/anime.interface';
import { IUser } from './../../interfaces/user.interface';

export const WRONG_ID_MOCK = '6073-7bde-2e93-9791ceda1fe5';
export const ID_MOCK = '62261a65d66c6be0a63c051f';

export const WRONG_COMMENT_INSTANCE_MOCK = {
  user_id: '62261a65d66c6be0a63c051f',
  anime_internal_id: '6073-7bde-2e93-9791ceda1fe5',
}

export const COMMENT_INSTANCE_MOCK: IComment = {
  user_id: '62261a65d66c6be0a63c051f',
  anime_internal_id: '6073-7bde-2e93-9791ceda1fe5',
  comment: 'comment test',
  rating: 4
}

export const COMMENT_INSTANCE_MOCK_WITH_ID = {
  _id: '62261a65d66c6be0a63c051f',
  user_id: '62261a65d66c6be0a63c051f',
  anime_internal_id: '6073-7bde-2e93-9791ceda1fe5',
  episode: 5,
  comment: 'comment test',
  rating: 4
}

export const WRONG_ANIMES_INSTANCE = {
  anime_id: '6073-7bde-2e93-9791ceda1fe5',
  favorite: false,
  watching: true,
  rating: 'oi',
  comments: [],
}

export const ANIMES_INSTANCE_MOCK: IAnime = {
  anime_id: '6073-7bde-2e93-9791ceda1fe5',
  title: 'Naruto',
  image: 'https://somelink.com.br',
  genres: ['shonen'],
  status: 'finished',
  description: '',
  episodes: [],
  rating: 4,
  comments: [],
}

export const ANIMES_INSTANCE_MOCK_WITH_ID: IAnime = {
  anime_id: '6073-7bde-2e93-9791ceda1fe5',
  title: 'Naruto',
  image: 'https://somelink.com.br',
  genres: ['shonen'],
  status: 'finished',
  description: '',
  episodes: [],
  rating: 4,
  comments: [],
}

export const WRONG_USER_INSTANCE = {
  tag: 'LordCroftTR',
  fullName: 'Adson Gomes Oliveira',
  birthDate: '2000/10/10',
  email: 'adsongoliveira2022@outlook.com'
};

export const USER_INSTANCE_MOCK: IUser = {
  tag: 'LordCroftTR',
  fullName: 'Adson Gomes Oliveira',
  birthDate: '2000/10/10',
  picture: '',
  email: 'teste123@email.com',
  password: '454ds5dfv131fvdfsd5fd5s2',
  gender: 'male',
  anime_list: [],
  showFavorites: false,
  achievements: [],
  memberSince: '2000-10-10',
};

export const USER_INSTANCE_MOCK_WITH_ID = {
  _id: '62261a65d66c6be0a63c051f',
  tag: 'LordCroftTR',
  fullName: 'Adson Gomes Oliveira',
  birthDate: '2000/10/10',
  picture: '',
  password: '454ds5dfv131fvdfsd5fd5s2',
  gender: 'male',
  anime_list: [
    'lo54267c-6073-7bde-2e93-9791ceda1fe5',
    'bu54267c-6577-7bde-2e93-9791ceda1fe5'
  ],
} as any;