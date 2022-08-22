import { Swiper, SwiperSlide } from "swiper/react";
import AnimeItem from "./AnimeItem";
import AnimeItemSkeleton from "./AnimeItemSkeleton";
import { getListAnime } from "../../apis/apis";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const AnimeList = ({ type }) => {
  const { data, isError, isLoading } = useQuery(["list-anime", type], () =>
    getListAnime(type)
  );
  const navigate = useNavigate();

  if (isError) {
    toast.error("Something went wrong! Please try again!");
    return navigate("/");
  }

  return (
    <div className="anime-list">
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
        {isLoading &&
          new Array(10).fill(0).map((item, index) => (
            <SwiperSlide key={index}>
              <AnimeItemSkeleton />
            </SwiperSlide>
          ))}
        {!isLoading &&
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

export default memo(AnimeList);
