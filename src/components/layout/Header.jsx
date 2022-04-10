import { NavLink } from "react-router-dom";
import { useState } from "react";

const navList = [
  {
    path: "/anime",
    title: "Anime",
  },
  {
    path: "/genre",
    title: "Genre",
  },
  {
    path: "/search",
    title: "Search",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full shadow-md">
      <div className="page-container flex items-center justify-between relative">
        <NavItem path="/">
          <span className="font-semibold">Home</span>
        </NavItem>

        <div className="hidden md:flex gap-x-5">
          {navList.map((item, index) => (
            <NavItem key={index} path={item.path}>
              {item.title}
            </NavItem>
          ))}
        </div>

        <div className="inline md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>

        {open && (
          <div className="absolute top-full left-0 z-10 bg-slate-900 w-full">
            <div className="flex flex-col gap-y-3">
              {navList.map((item, index) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `p-3 text-white bg-green-500` : `p-3 text-white`
                  }
                  key={index}
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavItem = ({ path, children }) => {
  return (
    <NavLink
      to={`${path}`}
      className={({ isActive }) =>
        isActive
          ? `flex items-center gap-x-2 bg-green-500 p-3 rounded-lg text-white`
          : `p-3 flex items-center gap-x-2 rounded-lg text-white`
      }
    >
      {children}
    </NavLink>
  );
};

export default Header;
