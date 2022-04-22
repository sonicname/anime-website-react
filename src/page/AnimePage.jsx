import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import Loading from "../components/loading/Loading";

const AnimePage = () => {
  const { data, error } = useSWR("https://api.jikan.moe/v4/top/anime", fetcher);

  const loading = !data && !error;

  return (
    <div className="page-container text-white">
      <div className="w-full mt-3 flex">
        <input
          className="flex-1 p-3 text-black outline-none select-none"
          type="text"
          placeholder="Enter your anime name"
        />
        <button className="px-4 py-4 bg-purple-500 font-semibold">
          Search
        </button>
      </div>

      <div className="mt-10 w-full">
        <h2 className="font-semibold text-2xl">Result: </h2>

        {loading ? (
          <div className="w-full mx-auto">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-4">
            {data.data.length > 0 &&
              data.data.map((anime, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 shadow-md bg-slate-900"
                >
                  <div className="w-full h-[400px] md:h-[250px]">
                    <img
                      className="w-full h-full object-cover"
                      src={anime.images.jpg.large_image_url}
                      alt=""
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{anime.title}</h3>
                    <p className="text-sm opacity-80 mt-3">
                      {anime.title_japanese}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimePage;
