export const getAnimeDetail = async (id) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  return res.json();
};

export const getListAnime = async (type) => {
  const res = await fetch(`https://api.jikan.moe/v4/${type}`);
  return res.json();
};

export const getCharacterDetail = async (id) => {
  const res = await fetch(`https://api.jikan.moe/v4/characters/${id}`);
  return res.json();
};

export const search = async (url) => {
  const res = await fetch(url);
  return res.json();
};
