import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import CryAnimeGirlPNG from '../assets/images/cry-anime-girl.png';
import findExternalAnimes from '../services/animesExternalRequest';
import { IAnimeExternal } from '../interfaces/anime.interface';

import './css/animes.css';

function Animes(): JSX.Element {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [animes, setAnimes] = useState<IAnimeExternal[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setInputSearch(value);
  }

  const handleSearch = async (): Promise<void> => {
    if (inputSearch.length === 0) return setAnimes([]);

    const animeFound = await findExternalAnimes(inputSearch);
    console.log(animeFound);
    
    setAnimes(animeFound);
  }

  return (
    <section className="animes-section">
      <Header />
      <div className="search-animes">
        <input
          type="text"
          onChange={handleInput}
          value={inputSearch}
        />
        <button
          type="button"
          onClick={handleSearch}
        >
          <span className="material-icons-outlined">search</span>
        </button>
      </div>
      {animes.length > 0 ? (
        <div  className="anime-found-cards">
          {animes.map((anime) => {
            const { title, image, id } = anime;
            return (
              <Link key={uuid()} to={`/animes/${id}`}>
                <span>{title}</span>
                <img src={image} alt={`Capa do Anime: ${title}`} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="top-animes">
          <h2>Animes mais assistidos pelos nossos usuários</h2>
          <span>Ainda não tenho dados suficientes</span>
          <span>{`
            Divulge para os amigos e deixe essa garotinha 
            feliz :D
          `}</span>
          <img src={CryAnimeGirlPNG} alt="" />
        </div>
      )}
      <Footer />
    </section>
  );
}

export default Animes;
