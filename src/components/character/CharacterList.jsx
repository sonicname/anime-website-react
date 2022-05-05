import React from "react";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Swiper, SwiperSlide } from "swiper/react";
import CharacterItem from "./CharacterItem";
import CharacterItemSkeleton from "./CharacterItemSkeleton";

const CharacterList = ({ url }) => {
  const { data, error } = useSWR(url, fetcher);

  const loading = !data && !error;

  return (
    <div className="character-list">
      {
        <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
          {loading &&
            new Array(10).fill(0).map((item, index) => (
              <SwiperSlide key={index}>
                <CharacterItemSkeleton />
              </SwiperSlide>
            ))}
          {!loading &&
            data &&
            data.data.length > 0 &&
            data.data.map((character) => (
              <SwiperSlide key={character.mal_id}>
                <CharacterItem character={character} />
              </SwiperSlide>
            ))}
        </Swiper>
      }
    </div>
  );
};

export default CharacterList;
