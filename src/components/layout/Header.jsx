import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';

import HeaderLink from '../header/HeaderLink';
import HeaderHamburger from '../header/HeaderHamburger';

const linkList = [
  {
    id: 1,
    to: '/anime',
    title: 'Anime',
  },
  {
    id: 2,
    to: '/character',
    title: 'Character',
  },
  {
    id: 3,
    to: '/search',
    title: 'Search',
  },
];

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full text-white select-none bg-slate-900'>
      <div className='relative z-10 flex items-center justify-between page-container'>
        <NavLink
          className={({ isActive }) =>
            `p-3 ${isActive && 'bg-green-500'} text-white rounded-lg`
          }
          to={'/'}
        >
          <h1 className='text-xl font-bold'>Home</h1>
        </NavLink>

        <div
          onClick={() => setShow(!show)}
          className='h-8 w-[40px] flex flex-col items-center justify-between lg:hidden z-10'
        >
          <HeaderHamburger show={show} />
        </div>

        <ul
          className={`absolute top-full right-full w-full bg-slate-900 duration-300 flex flex-col px-1 py-3 gap-y-4 lg:static lg:p-0 lg:flex lg:flex-row lg:flex-1 lg:justify-end ${
            show && '!right-0'
          }`}
        >
          {linkList.map((link) => (
            <HeaderLink key={link.id} to={link.to} setShow={setShow}>
              {link.title}
            </HeaderLink>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
