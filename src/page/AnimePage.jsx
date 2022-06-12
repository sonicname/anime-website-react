import AnimeList from "../components/anime/AnimeList";
import { Fade } from "react-reveal";

const AnimePage = () => {
  return (
    <div className="page-container flex flex-col gap-y-10">
      <section id="top-anime" className="text-white">
        <Fade bottom>
          <h2 className="text-2xl font-semibold mb-3">Top Anime</h2>
          <AnimeList url="https://api.jikan.moe/v4/top/anime" />
        </Fade>
      </section>

      <section id="season-now" className="text-white">
        <Fade bottom>
          <h2 className="text-2xl font-semibold mb-3">Season now</h2>
          <AnimeList url="https://api.jikan.moe/v4/seasons/now" />
        </Fade>
      </section>

      <section id="season-upcoming" className="text-white">
        <Fade bottom>
          <h2 className="text-2xl font-semibold mb-3">Season Upcoming</h2>
          <AnimeList url="https://api.jikan.moe/v4/seasons/upcoming" />
        </Fade>
      </section>
    </div>
  );
};

export default AnimePage;
