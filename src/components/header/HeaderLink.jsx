import { NavLink } from 'react-router-dom';
import { memo } from 'react';

const HeaderLink = ({ to, setShow, children }) => {
  return (
    <li className='m-3 font-semibold w-full lg:w-auto'>
      <NavLink
        className={({ isActive }) => `p-3 ${isActive && 'bg-green-500'} text-white rounded-lg`}
        to={to}
        onClick={() => setShow(false)}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default memo(HeaderLink);
