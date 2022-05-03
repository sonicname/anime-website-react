import { useState } from "react";
import { NavLink } from "react-router-dom";

const listNav = [
  {
    id: 1,
    to: "/anime",
    title: "Anime",
  },
  {
    id: 2,
    to: "/search",
    title: "Search",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="shadow-md">
      <div className="page-container">
        <div className="text-white font-semibold flex items-center justify-between relative p-3">
          {show && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75"
              onClick={() => setShow(false)}
            />
          )}
          <div>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "p-3 bg-green-400 rounded-lg" : "p-3 rounded-lg"
              }
            >
              Home
            </NavLink>
          </div>

          <ul
            className={`fixed top-0 flex flex-col w-2/4 h-full bg-slate-800 z-10 transition-all ${
              show ? "right-0 opacity-100" : "-right-full opacity-0"
            } md:hidden `}
          >
            {listNav.map((item) => (
              <li key={item.id} className="p-5 mt-10">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "p-3 bg-green-400 rounded-lg" : "p-3 rounded-lg"
                  }
                  to={item.to}
                  key={item.id}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="flex gap-x-3 hidden md:flex">
            {listNav.map((item) => (
              <li key={item.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "p-3 bg-green-400 rounded-lg" : "p-3 rounded-lg"
                  }
                  to={item.to}
                  key={item.id}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            className={`inline-block md:hidden z-[100] ${
              show && "fixed top-6 right-6"
            }`}
          >
            <div
              className="relative flex flex-col gap-y-[4px]"
              onClick={() => setShow(!show)}
            >
              <span
                className={`block w-6 h-[3px] bg-white transition-all ${
                  show && "rotate-45 translate-y-[7px]"
                }`}
              ></span>
              <span
                className={`block w-6 h-[3px] bg-white transition-all ${
                  show && "opacity-0 invisible"
                }`}
              ></span>
              <span
                className={`block w-6 h-[3px] bg-white transition-all ${
                  show && "-rotate-45 -translate-y-[7px]"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
