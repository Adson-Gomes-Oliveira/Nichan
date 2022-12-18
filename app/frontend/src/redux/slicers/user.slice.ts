import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../../interfaces/user.interface';

const INITIAL_STATE = {
  _id: '',
  tag: '',
  fullName: '',
  birthDate: '',
  picture: '',
  aboutMe: '',
  email: '',
  gender: '',
  showFavorites: false,
  socialMedia: {
    instagram: '',
    amino: '',
    tiktok: ''
  },
  anime_list: [],
  achievements: [],
  memberSince: '',
} as unknown as IUser;

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser(state, payload: PayloadAction<IUser>) {
      return state = {...payload.payload}
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
