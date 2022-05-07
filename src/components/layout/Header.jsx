import React from "react";
import { NavLink } from "react-router-dom";
import HeaderLink from "../header/HeaderLink";
import IconMenu from "../icons/IconMenu";
import IconClose from "../icons/IconClose";

const linkList = [
  {
    id: 1,
    to: "/anime",
    title: "Anime",
  },
  {
    id: 2,
    to: "/character",
    title: "Character",
  },
  {
    id: 3,
    to: "/search",
    title: "Search",
  },
];

const Header = () => {
  const [show, setShow] = React.useState(false);
  return (
    <header className="w-full bg-slate-900 text-white select-none fixed z-50">
      <div className="page-container flex items-center justify-between relative">
        <NavLink
          className={({ isActive }) =>
            `p-3 ${isActive && "bg-green-500"} text-white rounded-lg`
          }
          to={"/"}
        >
          <h1 className="font-bold text-2xl">Home</h1>
        </NavLink>

        <div onClick={() => setShow(!show)} className="h-8 w-8 lg:hidden">
          {show ? (
            <IconClose className={"h-full w-full"} />
          ) : (
            <IconMenu className={"h-full w-full"} />
          )}
        </div>

        <ul
          className={`absolute top-full right-full w-full bg-slate-900 ${
            show && "!right-0"
          } duration-300 flex flex-col px-1 py-3 gap-y-4 lg:static lg:flex lg:flex-row lg:flex-1 lg:justify-end`}
        >
          {linkList.map((link) => (
            <HeaderLink key={link.id} to={link.to}>
              {link.title}
            </HeaderLink>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
