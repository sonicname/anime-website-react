import React from "react";
import IconFavorite from "../icons/IconFavorite";
import Button from "../buttons/Button";

const CharacterItem = ({ character }) => {
  const { mal_id, images, name, name_kanji, favorites } = character;
  return (
    <div className="shadow-md bg-slate-900 flex flex-col gap-y-1 h-full rounded-lg select-none">
      <div className="w-full h-[350px] rounded-t-lg">
        <img
          srcSet={`${images.jpg.image_url} 2x`}
          alt=""
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-y-3 p-3 h-full">
        <h3 className="text-md font-semibold">
          {name} ({name_kanji})
        </h3>
        <div className="flex justify-end">
          <div className="flex gap-x-1">
            <span className="text-sm opacity-80">{favorites || "0"}</span>
            <IconFavorite className={"h-[16px] w-[16px] text-red-500"} />
          </div>
        </div>

        <div className="flex-1 mt-auto">
          <Button onClick={() => navigate(`/characters/${mal_id}`)}>
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
