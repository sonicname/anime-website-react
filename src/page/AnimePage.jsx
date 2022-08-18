import AnimeList from "../components/anime/AnimeList";

const AnimePage = () => {
  return (
    <div className="page-container flex flex-col gap-y-10">
      <section id="top-anime" className="text-white">
        <h2 className="text-2xl font-semibold mb-3">Top Anime</h2>
        <AnimeList type="top/anime" />
      </section>

      <section id="season-now" className="text-white">
        <h2 className="text-2xl font-semibold mb-3">Season now</h2>
        <AnimeList type="seasons/now" />
      </section>

      <section id="season-upcoming" className="text-white">
        <h2 className="text-2xl font-semibold mb-3">Season Upcoming</h2>
        <AnimeList type="seasons/upcoming" />
      </section>
    </div>
  );
};

export default AnimePage;
