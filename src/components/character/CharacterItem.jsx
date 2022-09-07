import { memo } from 'react';
import Button from '../buttons/Button';
import { useNavigate } from 'react-router-dom';
import IconFavorite from '../icons/IconFavorite';

const CharacterItem = ({ character }) => {
  const navigate = useNavigate();
  const { mal_id, images, name, favorites } = character;
  return (
    <div className="shadow-md bg-slate-900 flex flex-col gap-y-1 h-full rounded-lg select-none">
      <div className="w-full h-[350px] rounded-t-lg">
        <img
          srcSet={`${images.jpg.image_url} 2x`}
          alt=""
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-3 p-3 h-full">
        <h3 className="text-md font-semibold">{name}</h3>
        <div className="flex mt-auto justify-end">
          <div className="flex gap-x-1">
            <span className="text-sm opacity-80">
              {favorites || '0'}
            </span>
            <IconFavorite
              className={'h-[16px] w-[16px] text-red-500'}
            />
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
