import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeItem = ({ anime }) => {
  const navigate = useNavigate();
  const { title, score, favorites, images, mal_id } = anime;

  return (
    <div className="shadow-md p-3 bg-slate-900 flex flex-col gap-y-3 h-full rounded-lg select-none">
      <div className="w-full h-[350px]">
        <img
          src={images.jpg.large_image_url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-4">
        <h3 className="text-md font-semibold">{title}</h3>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-x-1">
            <span className="text-sm opacity-80">{score}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[14px] w-[14px] text-yellow-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-sm opacity-80">{favorites}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[14px] w-[14px] text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div>
          <button
            onClick={() => navigate(`/anime/${mal_id}`)}
            className="w-full bg-green-400 rounded-lg p-2 font-semibold hover:opacity-75"
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeItem;
