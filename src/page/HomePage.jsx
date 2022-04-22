import React from "react";
import AnimeList from "../components/anime/AnimeList";

const HomePage = () => {
  return (
    <div className="page-container flex flex-col gap-y-10">
      <section id="top-anime" className="text-white">
        <h2 className="text-2xl font-semibold mb-3">Top Anime</h2>
        <AnimeList url="https://api.jikan.moe/v4/top/anime" />
      </section>

      <section id="top-manga" className="text-white">
        <h2 className="text-2xl font-semibold mb-3">Top Manga</h2>
        <AnimeList url="https://api.jikan.moe/v4/top/manga" />
      </section>
    </div>
  );
};

export default HomePage;
