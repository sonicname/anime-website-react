import { memo } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getListAnime } from '../../apis/apis';

import AnimeItem from './AnimeItem';
import AnimeItemSkeleton from './AnimeItemSkeleton';

const AnimeList = ({ type }) => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery(['list-anime', { type }], () =>
    getListAnime(type),
  );

  if (isError) {
    toast.error('Something went wrong! Please try again!');
    return navigate('/');
  }

  return (
    <div className='anime-list'>
      <Swiper grabCursor={'true'} spaceBetween={20} slidesPerView={'auto'}>
        {isLoading &&
          new Array(10).fill(0).map((_, index) => (
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
