import { memo } from "react";
import LoadingSkeleton from "../loading/LoadingSkeleton";
import IconFavorite from "../icons/IconFavorite";

const CharacterItemSkeleton = () => {
  return (
    <div className="shadow-md bg-slate-900 flex flex-col gap-y-1 h-full rounded-lg select-none">
      <div className="w-full h-[350px] rounded-t-lg">
        <LoadingSkeleton width={"100%"} height={"100%"} radius={"8px"} />
      </div>
      <div className="flex flex-1 flex-col gap-y-3 p-3 h-full">
        <LoadingSkeleton width={"100%"} height={"20px"} radius={"6px"} />
        <div className="flex mt-auto justify-end">
          <div className="flex gap-x-1">
            <LoadingSkeleton width={"20px"} height={"20px"} radius={"6px"} />
            <IconFavorite className={"h-[16px] w-[16px] text-red-500"} />
          </div>
        </div>

        <LoadingSkeleton width={"100%"} height={"45px"} radius={"8px"} />
      </div>
    </div>
  );
};

export default memo(CharacterItemSkeleton);
