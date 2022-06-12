import useSWR from "swr";
import { useState, useRef } from "react";
import { fetcher } from "../utils/fetcher";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimeItem from "../components/anime/AnimeItem";
import AnimeItemSkeleton from "../components/anime/AnimeItemSkeleton";
import { Fade } from "react-reveal";

const SearchPage = () => {
  const [query, setQuery] = useState("naruto");
  const inputRef = useRef(null);

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime?q=${query}`,
    fetcher
  );

  const loading = !data && !error;

  return (
    <div className="page-container">
      <div className="flex flex-col gap-y-4">
        <Fade bottom>
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
        </Fade>

        <div className="text-white mt-4">
          <Fade bottom>
            <Swiper
              grabCursor={"true"}
              spaceBetween={20}
              slidesPerView={"auto"}
            >
              {loading &&
                new Array(4).fill(0).map((item, index) => (
                  <SwiperSlide key={index}>
                    <AnimeItemSkeleton />
                  </SwiperSlide>
                ))}
              {!loading &&
                data &&
                data.data.length > 0 &&
                data.data.map((anime) => (
                  <SwiperSlide key={anime.mal_id}>
                    <AnimeItem anime={anime} />
                  </SwiperSlide>
                ))}
              {data && data.data.length <= 0 && (
                <div className="text-md text-red-500 p-3">
                  Keyword: <span className="font-bold">{query}</span> is empty!
                </div>
              )}
            </Swiper>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
