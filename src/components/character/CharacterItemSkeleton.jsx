import { memo } from 'react';

import IconFavorite from '../icons/IconFavorite';
import LoadingSkeleton from '../loading/LoadingSkeleton';

const CharacterItemSkeleton = () => {
  return (
    <div className='flex flex-col h-full rounded-lg shadow-md select-none bg-slate-900 gap-y-1'>
      <div className='w-full h-[350px] rounded-t-lg'>
        <LoadingSkeleton width={'100%'} height={'100%'} radius={'8px'} />
      </div>
      <div className='flex flex-col flex-1 h-full p-3 gap-y-3'>
        <LoadingSkeleton width={'100%'} height={'20px'} radius={'6px'} />
        <div className='flex justify-end mt-auto'>
          <div className='flex gap-x-1'>
            <LoadingSkeleton width={'20px'} height={'20px'} radius={'6px'} />
            <IconFavorite className={'h-[16px] w-[16px] text-red-500'} />
          </div>
        </div>

        <LoadingSkeleton width={'100%'} height={'45px'} radius={'8px'} />
      </div>
    </div>
  );
};

export default memo(CharacterItemSkeleton);
