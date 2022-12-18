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

  const handleFavorite = async () => {
    
  }

  return (
    <section className="anime-details-section">
      <Header />
      {animeDetails && (
        <div className="details-anime">
          <h2>{animeDetails.title}</h2>
          <div className="description-details">
            <img src={animeDetails.image} alt={`Anime - ${animeDetails.title}`} />
            <div className="text-description">
              <h3>Sobre o anime</h3>
              <p>{animeDetails.description}</p>
            </div>
          </div>
          <div className="infos">
            <span><b>Nota dos usuários:</b> {animeDetails.rating}</span>
            <span><b>Genêros:</b> {animeDetails.genres}</span>
            <span><b>Ano de Lançamento:</b> {animeDetails.releaseDate}</span>
          </div>
        </div>
      )}
      <button
        type="button"
        className="favorite-button"
        onClick={handleFavorite}
      >
        <span>Adicionar a lista de Favoritos +</span>
      </button>
      <div className="comments-anime">
        <h2>Comentários</h2>
        <span className="howto-comment">{`
          Para comentar você precisa estar logado, favoritar o anime e na página de favoritos selecionar 
          este anime e fazer seu comentário clicando em avaliar.
        `}</span>
        <span className="no-comments">Ainda não tem comentários nesse anime, deixe sua contribuição :D</span>
        <div className="coment-card">
          
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default AnimeDetails;
