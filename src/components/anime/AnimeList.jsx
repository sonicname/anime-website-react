import React from "react";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimeItem from "./AnimeItem";

const AnimeList = ({ url }) => {
  const { data, error } = useSWR(url, fetcher);

  const loading = !data && !error;

  if (!data) return null;

  return (
    <div className="anime-list">
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
        {data.data.length > 0 &&
          data.data.map((anime) => (
            <SwiperSlide key={anime.mal_id}>
              <AnimeItem anime={anime} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default AnimeList;
