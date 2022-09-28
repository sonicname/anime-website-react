import { useQuery } from '@tanstack/react-query';

const useGetAnimeList = (type) => {
  return useQuery(
    ['list-anime', { type }],
    async () => await (await fetch(`https://api.jikan.moe/v4/${type}`)).json(),
  );
};

export default useGetAnimeList;
