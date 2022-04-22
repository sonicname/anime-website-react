import React from "react";

const AnimeItem = ({ anime }) => {
  const { title, score, favorites, images } = anime;

  return (
    <div className="shadow-md p-3 bg-slate-900 flex flex-col gap-y-3 h-full rounded-lg select-none">
      <div className="w-full h-[300px]">
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
            <div className="text-yellow-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-sm opacity-80">{favorites}</span>
            <div className="text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <button className="w-full bg-green-400 rounded-lg p-2 font-semibold">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeItem;
