import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900">
      <div className="page-container grid grid-cols-1 md:grid-cols-2">
        <div className="text-slate-400 flex flex-col p-3">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <span>Phamanhduc2k2@gmail.com</span>
          </div>

          <div className="flex items-center gap-x-3 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>+8491919191</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
