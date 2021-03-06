import IconEmail from "../icons/IconEmail";
import IconPhone from "../icons/IconPhone";

const Footer = () => {
  return (
    <div className="bg-slate-900">
      <div className="page-container grid grid-cols-1 md:grid-cols-2 text-[18px]">
        <div className="text-slate-400 flex-col p-3 hidden md:flex">
          <h4 className="italic">
            “There are no regrets. If one can be proud of one’s life, one should
            not wish for another chance.”
          </h4>
          <h4 className="italic flex justify-end mt-3">
            Saber (Fate Stay Night)
          </h4>
        </div>

        <div className="flex flex-col items-start md:items-end p-3 text-slate-400">
          <h4 className="text-xl">Contact</h4>
          <div className="flex items-center gap-x-3 mt-3">
            <IconEmail className={"h-5 w-5"} />
            <span>Phamanhduc2k2@gmail.com</span>
          </div>

          <div className="flex items-center gap-x-3 mt-3">
            <IconPhone className={"h-5 w-5"} />
            <span>+8491919191</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
