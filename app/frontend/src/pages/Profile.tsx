import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import IUser from '../interfaces/user.interface';
import InstagramColorizedSVG from '../assets/svgs/colorized/instagram-colorized.svg';
import TiktokColorizedSVG from '../assets/svgs/colorized/tiktok-colorized.svg';
import AminoColorizedPNG from '../assets/images/amino-colorized.png';

import './css/profile.css';

function Profile(): JSX.Element {
  const [userInfos, setUserInfos] = useState<IUser>();

  useEffect(() => {
    const userLogged = localStorage.getItem('user');
    if (userLogged) {
      const recoveredUser = JSON.parse(userLogged).data._doc;
      setUserInfos(recoveredUser);
    }
  }, []);

  return (
    <section className="profile-section">
      <Header />
      <div className="user-info-profile">
        <div className="general-user-info">
          <span className="material-icons-outlined">account_circle</span>
          <span className="username">{userInfos?.fullName}</span>
          <span className="tag">@{userInfos?.tag}</span>
          <div className="social-media">
            <a
              href={userInfos?.socialMedia.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <img src={InstagramColorizedSVG} alt="Icone do Instagram" />
            </a>
            <a
              href={userInfos?.socialMedia.amino}
              target="_blank"
              rel="noreferrer"
            >
              <img src={AminoColorizedPNG} alt="Icone do Amino" />
            </a>
            <a
              href={userInfos?.socialMedia.tiktok}
              target="_blank"
              rel="noreferrer"
            >
              <img src={TiktokColorizedSVG} alt="Icone do Tiktok" />
            </a>
          </div>
        </div>
        <div className="data-user-info">
          <span>Minutos Assistidos: </span>
          <span>Animes Completos: </span>
          <span>{`Membro desde: ${userInfos?.memberSince}`}</span>
        </div>
      </div>
      <div className="aboutme-profile">
        <h2>Sobre mim</h2>
      </div>
      <div className="achievements-profile">
        <h2>Conquistas</h2>
      </div>
      <div className="favorite-animes-profile">
        <h2>Animes Favoritos</h2>
      </div>
      <Footer />
    </section>
  );
}

export default Profile;
