import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import AnimeItem from "../components/anime/AnimeItem";

const SearchPage = () => {
  const [query, setQuery] = React.useState("naruto");
  const inputRef = React.useRef(null);

  const handleSearchBtn = (e) => {
    const searchVal = inputRef.current.value;
    setQuery(searchVal);
  };

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime?q=${query}`,
    fetcher
  );

  return (
    <div className="page-container">
      <div className="flex flex-col">
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 p-3 font-semibold outline-none"
            placeholder="Enter your keyword"
            ref={inputRef}
            defaultValue={query}
          />
          <button
            onClick={handleSearchBtn}
            className="p-3 bg-purple-600 text-white font-semibold hover:opacity-75 duration-300"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-4 mt-4 gap-5 text-white">
          {data &&
            data.data.length > 0 &&
            data.data.map((anime) => (
              <AnimeItem key={anime.mal_id} anime={anime} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
