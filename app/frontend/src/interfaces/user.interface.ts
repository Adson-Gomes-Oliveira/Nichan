interface IUser {
  _id: string,
  tag: string,
  fullName: string,
  birthDate: string,
  picture: string,
  aboutMe: string,
  email: string,
  password: string,
  gender: string,
  showFavorites: boolean,
  socialMedia: {
    instagram: string,
    amino: string,
    tiktok: string,
  },
  anime_list: object,
  achievements: string[],
  memberSince: Date,
}

export default IUser;
