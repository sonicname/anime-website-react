import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../buttons/Button';
import IconStar from '../icons/IconStar';
import IconFavorite from '../icons/IconFavorite';

const AnimeItem = ({ anime }) => {
  const navigate = useNavigate();
  const { title, score, favorites, images, mal_id } = anime;

  return (
    <div className='flex flex-col h-full rounded-lg shadow-md select-none bg-slate-900 gap-y-1'>
      <div className='w-full h-[350px] rounded-t-lg'>
        <img
          srcSet={`${images.jpg.large_image_url} 2x`}
          alt=''
          className='object-cover w-full h-full rounded-t-lg'
        />
      </div>
      <div className='flex flex-col flex-1 p-3 gap-y-3'>
        <h3 className='font-semibold text-md'>{title}</h3>
        <div className='flex items-center justify-between mt-auto'>
          <div className='flex items-center gap-x-1'>
            <span className='text-sm opacity-80'>{score || '0'}</span>

            <IconStar
              className={'h-[16px] w-[16px] flex items-center text-yellow-300'}
            />
          </div>

          <div className='flex items-center gap-x-1'>
            <span className='text-sm opacity-80'>{favorites || '0'}</span>
            <IconFavorite className={'h-[16px] w-[16px] text-red-500'} />
          </div>
        </div>

        <Button onClick={() => navigate(`/anime/${mal_id}`)}>Watch Now</Button>
      </div>
    </div>
  );
};

export default memo(AnimeItem);
