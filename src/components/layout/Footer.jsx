import { memo } from 'react';

import IconEmail from '../icons/IconEmail';
import IconPhone from '../icons/IconPhone';

const Footer = () => {
  return (
    <div className='bg-slate-900'>
      <div className='grid grid-cols-1 page-container md:grid-cols-2 text-md'>
        <div className='flex-col hidden p-3 italic text-slate-400 md:flex'>
          <h4>
            “There are no regrets. If one can be proud of one’s life, one should
            not wish for another chance.”
          </h4>
          <h4 className='mt-3 text-end'>Saber (Fate Stay Night)</h4>
        </div>

        <div className='flex flex-col items-start p-3 md:items-end text-slate-400'>
          <h4>Contact</h4>
          <div className='flex items-center mt-3 gap-x-3'>
            <span>phamanhduc2k2@gmail.com</span>
            <IconEmail className={'h-5 w-5'} />
          </div>

          <div className='flex items-center mt-3 gap-x-3'>
            <span>+843092002</span>
            <IconPhone className={'h-5 w-5'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
