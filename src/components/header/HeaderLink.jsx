import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = ({ to, children }) => {
  return (
    <li className="p-3 font-semibold">
      <NavLink
        className={({ isActive }) =>
          isActive ? "p-3 bg-green-500 text-white rounded-lg" : "p-3 rounded-lg"
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default HeaderLink;
