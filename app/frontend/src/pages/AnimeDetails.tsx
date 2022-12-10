import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import IAnime from '../interfaces/anime.interface';
import { findOneExternalAnime } from '../services/animesExternalRequest';

function AnimeDetails(): JSX.Element {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState({});
 
  const getAnimeDetails = useCallback(async (): Promise<void> => {
    const request = await findOneExternalAnime(id as string);
    setAnimeDetails(request);
  }, [id, setAnimeDetails]);

  useEffect(() => {
    getAnimeDetails();
  }, [getAnimeDetails]);

  return (
    <section>
      
    </section>
  );
}

export default AnimeDetails;
