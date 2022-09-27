import { useQuery } from '@tanstack/react-query';

const useGetAnimeDetail = (animeID) => {
  return useQuery(['anime', { animeID }], async () =>
    (await fetch(`https://api.jikan.moe/v4/anime/${animeID}`)).json(),
  );
};

export default useGetAnimeDetail;
