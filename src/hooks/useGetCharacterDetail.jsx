import { useQuery } from '@tanstack/react-query';

const useGetCharacterDetail = (characterID) => {
  return useQuery(['character', { characterID }], async () =>
    (await fetch(`https://api.jikan.moe/v4/characters/${characterID}`)).json(),
  );
};

export default useGetCharacterDetail;
