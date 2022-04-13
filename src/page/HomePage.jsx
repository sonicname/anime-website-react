import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

const HomePage = () => {
  const { data, error } = useSWR(
    "https://api.jikan.moe/v4/random/anime",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (!data) return null;
  const randomAnime = data?.data;

  return (
    <div className="page-container text-white">
      <section className="recommend-anime">
        <h2 className="text-3xl font-bold mt-5 mb-5 text-center">
          Random Anime
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[30%]">
            <img
              className="w-full h-full object-cover"
              src={randomAnime.images.jpg.large_image_url}
              alt=""
            />
          </div>

          <div className="mt-5 md:mt-0 md:pl-5 flex-1">
            <h3 className="font-semibold text-xl">
              <span className="strong">{randomAnime.title}</span>{" "}
              <span className="text-teal-400">
                ({randomAnime.title_japanese})
              </span>
            </h3>
            <div className="mt-5 flex items-center gap-x-5">
              <h2 className="font-semibold">Tag: </h2>
              <div className="flex gap-5 mt-2">
                {randomAnime.genres.length > 0 &&
                  randomAnime.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="p-3 bg-black text-white rounded-lg"
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>
            </div>

            <div className="mt-5">
              <h2 className="font-semibold">Description: </h2>
              <p className="mt-2 text-sm opacity-80 leading-relaxed">
                {randomAnime.synopsis.length === 0
                  ? "Empty"
                  : randomAnime.synopsis}
              </p>
            </div>
            <div className="mt-3">
              <button className="w-full md:max-w-[300px] px-2 py-4 bg-purple-500 font-semibold rounded-lg">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
