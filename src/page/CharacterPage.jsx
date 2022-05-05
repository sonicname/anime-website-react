import { useRef, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import CharacterItem from "../components/character/CharacterItem";
import CharacterItemSkeleton from "../components/character/CharacterItemSkeleton";

const CharacterPage = () => {
  const [query, setQuery] = useState("naruto");
  const inputRef = useRef(null);

  const handleSearchBtn = (e) => {
    const searchVal = inputRef.current.value;
    setQuery(searchVal);
  };

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/characters?q=${query}`,
    fetcher
  );

  const loading = !data && !error;

  return (
    <div className="page-container">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 p-3 font-semibold outline-none rounded-l-md"
            placeholder="Enter your name character..."
            ref={inputRef}
            defaultValue={query}
          />
          <button
            onClick={handleSearchBtn}
            className="p-3 bg-purple-600 text-white font-semibold hover:opacity-75 duration-300 active:scale-90 rounded-r-md"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-5 text-white">
          {loading &&
            new Array(4)
              .fill(0)
              .map((item, index) => <CharacterItemSkeleton key={index} />)}
          {!loading &&
            data &&
            data.data.length > 0 &&
            data.data.map((character) => (
              <CharacterItem key={character.mal_id} character={character} />
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

export default CharacterPage;
