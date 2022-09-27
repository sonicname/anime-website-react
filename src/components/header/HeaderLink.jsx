import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({ to, setShow, children }) => {
  return (
    <li className='w-full m-3 font-semibold lg:w-auto'>
      <NavLink
        className={({ isActive }) =>
          `p-3 ${isActive && 'bg-green-500'} text-white rounded-lg`
        }
        to={to}
        onClick={() => setShow(false)}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default memo(HeaderLink);
