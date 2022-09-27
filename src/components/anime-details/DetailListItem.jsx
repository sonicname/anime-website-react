import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const DetailListItem = ({ items, title }) => {
  return (
    <div className='flex items-center gap-x-2'>
      <h3 className='text-sm font-semibold text-white'>{title}: </h3>
      <div className='flex flex-wrap gap-5'>
        {items.map((item) => (
          <span className='p-1 font-medium transition-all bg-blue-500 rounded-md cursor-pointer'>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default memo(DetailListItem);
