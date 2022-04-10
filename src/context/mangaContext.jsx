import { createContext, useContext } from "react";

const MangaContext = createContext(undefined);

const MangaProvider = (props) => {
  return <MangaContext.Provider value={null} {...props} />;
};

const useManga = () => {
  const context = useContext(MangaContext);
  if (typeof context === "undefined")
    throw new Error("useManga must be used within a MangaProvider");
  return context;
};

export { MangaProvider, useManga };
