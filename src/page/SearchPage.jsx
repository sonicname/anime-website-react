import { useState, useRef } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { toast } from "react-toastify";

import AnimeItem from "../components/anime/AnimeItem";
import AnimeItemSkeleton from "../components/anime/AnimeItemSkeleton";

const SearchPage = () => {
  const [query, setQuery] = useState("naruto");
  const inputRef = useRef(null);

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime?q=${query}`,
    fetcher
  );

  const loading = !data && !error;

  if (error) toast.error("Error! Please try again!");

  return (
    <div className="page-container">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 p-3 font-semibold outline-none rounded-l-md"
            placeholder="Enter your keyword"
            ref={inputRef}
            defaultValue={query}
          />
          <button
            onClick={() => setQuery(inputRef.current.value)}
            className="p-3 bg-purple-600 text-white font-semibold hover:opacity-75 duration-300 active:scale-90 rounded-r-md"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-5 text-white">
          {loading &&
            new Array(4)
              .fill(0)
              .map((item, index) => <AnimeItemSkeleton key={index} />)}
          {!loading &&
            data &&
            data.data.length > 0 &&
            data.data.map((anime) => (
              <AnimeItem key={anime.mal_id} anime={anime} />
            ))}
          {data && data.data.length <= 0 && (
            <div className="text-md text-red-500 p-3">
              Keyword: <span className="font-bold">{query}</span> is empty!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
