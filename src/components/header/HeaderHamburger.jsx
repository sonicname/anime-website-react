import { memo } from "react";

const HeaderHamburger = ({ show }) => {
  return (
    <>
      <span
        className={`w-full h-[4px] bg-white ${
          show && "rotate-45 translate-y-[14px]"
        } transition-all`}
      />
      <span
        className={`w-full h-[4px] bg-white ${
          show && "scale-0"
        } transition-all`}
      />
      <span
        className={`w-full h-[4px] bg-white ${
          show && "-rotate-45 -translate-y-[14px]"
        } transition-all`}
      />
    </>
  );
};

export default memo(HeaderHamburger);
