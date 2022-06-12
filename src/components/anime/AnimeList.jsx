import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimeItem from "./AnimeItem";
import AnimeItemSkeleton from "./AnimeItemSkeleton";

const AnimeList = ({ url }) => {
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  return (
    <div className="anime-list">
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
        {loading &&
          new Array(10).fill(0).map((item, index) => (
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
      </Swiper>
    </div>
  );
};

export default AnimeList;
