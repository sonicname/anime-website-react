import AnimeList from "../components/anime/AnimeList";
import CharacterList from "../components/character/CharacterList";

const AnimePage = () => {
  return (
    <div className="page-container flex flex-col gap-y-10">
      <section id="top-anime" className="text-white">
        <h2 className="text-2xl font-semibold mb-3">Top Anime</h2>
        <AnimeList url="https://api.jikan.moe/v4/top/anime" />
      </section>

      <section id="season-now" className="text-white">
        <h2 className="text-2xl font-semibold mb-3">Season now</h2>
        <AnimeList url="https://api.jikan.moe/v4/seasons/now" />
      </section>

      <section id="season-upcoming" className="text-white">
        <h2 className="text-2xl font-semibold mb-3">Season Upcoming</h2>
        <AnimeList url="https://api.jikan.moe/v4/seasons/upcoming" />
      </section>

      <section id="top-characters" className="text-white">
        <h2 className="text-2xl font-semibold mb-3">Top Characters</h2>
        <CharacterList url={"https://api.jikan.moe/v4/top/characters"} />
      </section>
    </div>
  );
};

export default AnimePage;
