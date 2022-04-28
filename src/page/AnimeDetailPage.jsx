import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

const AnimeDetailPage = () => {
  const { animeID } = useParams();

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime/${animeID}`,
    fetcher
  );

  if (!data) return null;

  const { images, title, title_japanese, synopsis } = data.data;

  return (
    <div className="page-container text-white grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="w-[500px] h-[600px] mx-auto rounded-md relative">
        <img
          src={images.jpg.large_image_url}
          alt=""
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="text-center flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-3">
          <h1 className="font-bold text-2xl">{title}</h1>
          <h2 className="text-sm text-gray-400">{title_japanese}</h2>
        </div>

        <div className="text-md text-gray-300">
          <p>{synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailPage;
