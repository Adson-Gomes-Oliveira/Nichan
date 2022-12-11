import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { findOneExternalAnime } from '../services/animesExternalRequest';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IAnime from '../interfaces/anime.interface';

import './css/animeDetails.css';

function AnimeDetails(): JSX.Element {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState<IAnime>();
 
  const getAnimeDetails = useCallback(async (): Promise<void> => {
    const request = await findOneExternalAnime(id as string);
    setAnimeDetails(request);
  }, [id, setAnimeDetails]);

  useEffect(() => {
    getAnimeDetails();
  }, [getAnimeDetails]);

  return (
    <section className="anime-details-section">
      <Header />
      {animeDetails && (
        <div className="details-anime">
          <span>{animeDetails.title}</span>
          <div className="description-details">
            <img src={animeDetails.image} alt={`Anime - ${animeDetails.title}`} />
            <div className="text-description">
              <h3>Sobre o anime</h3>
              <p>{animeDetails.description}</p>
            </div>
          </div>
          <div className="infos">
            <span>Nota geral: {animeDetails.rating}</span>
            <span>Genêros: {animeDetails.genres}</span>
            <span>Ano de Lançamento: {animeDetails.releaseDate}</span>
          </div>
        </div>
      )}
      <button
        type="button"
      >
        <span>Adicionar a lista de Favoritos +</span>
      </button>
      <div className="comments-anime">
        <h2>Comentários</h2>
        <div className="coment-card"></div>
      </div>
      <Footer />
    </section>
  );
}

export default AnimeDetails;
