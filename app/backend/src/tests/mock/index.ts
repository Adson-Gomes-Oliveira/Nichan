import { IUser } from './../../interfaces/user.interface';

export const WRONG_ID_MOCK = '6073-7bde-2e93-9791ceda1fe5';

export const WRONG_USER_INSTANCE = {
  nickName: 'LordCroftTR',
  fullName: 'Adson Gomes Oliveira',
  birthDate: new Date(),
  email: 'adsongoliveira2022@outlook.com'
};

export const USER_INSTANCE_MOCK: IUser = {
  nickName: 'LordCroftTR',
  fullName: 'Adson Gomes Oliveira',
  birthDate: new Date(),
  email: 'adsongoliveira2022@outlook.com',
  password: '454ds5dfv131fvdfsd5fd5s2',
  gender: 'female',
  user_animes_list: [],
};

export const USER_INSTANCE_MOCK_WITH_ID = {
  _id: '62261a65d66c6be0a63c051f',
  nickName: 'LordCroftTR',
  fullName: 'Adson Gomes Oliveira',
  birthDate: new Date(),
  email: 'adsongoliveira2022@outlook.com',
  password: '454ds5dfv131fvdfsd5fd5s2',
  gender: 'male',
  user_animes_list: [
    'lo54267c-6073-7bde-2e93-9791ceda1fe5',
    'bu54267c-6577-7bde-2e93-9791ceda1fe5'
  ],
} as any;