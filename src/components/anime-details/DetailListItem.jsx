import { memo } from "react";
import { NavLink } from "react-router-dom";

const DetailListItem = ({ items, title }) => {
  return (
    <div className="flex items-center gap-x-2">
      <h3 className="font-semibold text-white text-sm">{title}: </h3>
      <div className="flex flex-wrap gap-5">
        {items.map((item) => (
          <NavLink key={item.mal_id} to={"/search/genres"}>
            <span className="p-2 bg-blue-500 rounded-md font-medium hover:opacity-70 transition-all">
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default memo(DetailListItem);
