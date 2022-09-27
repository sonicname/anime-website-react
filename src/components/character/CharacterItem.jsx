import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../buttons/Button';
import IconFavorite from '../icons/IconFavorite';

const CharacterItem = ({ character: { mal_id, images, name, favorites } }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col h-full rounded-lg shadow-md select-none bg-slate-900 gap-y-1'>
      <div className='w-full h-[350px] rounded-t-lg'>
        <img
          srcSet={`${images.jpg.image_url} 2x`}
          alt=''
          className='object-cover w-full h-full rounded-t-lg'
        />
      </div>
      <div className='flex flex-col flex-1 h-full p-3 gap-y-3'>
        <h3 className='font-semibold text-md'>{name}</h3>
        <div className='flex justify-end mt-auto'>
          <div className='flex gap-x-1'>
            <span className='text-sm opacity-80'>{favorites || '0'}</span>
            <IconFavorite className={'h-[16px] w-[16px] text-red-500'} />
          </div>
        </div>

        <Button onClick={() => navigate(`/character/${mal_id}`)}>
          More Info
        </Button>
      </div>
    </div>
  );
};

export default memo(CharacterItem);
