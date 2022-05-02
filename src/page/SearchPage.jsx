import { useState, useRef } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import AnimeItem from "../components/anime/AnimeItem";
import { toast } from "react-toastify";

const SearchPage = () => {
  const [query, setQuery] = useState("naruto");
  const inputRef = useRef(null);

  const handleSearchBtn = (e) => {
    const searchVal = inputRef.current.value;
    setQuery(searchVal);
  };

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime?q=${query}`,
    fetcher
  );

  if (error) toast.error("Error! Please try again!");

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
            className="p-3 bg-purple-600 text-white font-semibold hover:opacity-75 duration-300 active:scale-90"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4 text-white">
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
