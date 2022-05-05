import { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import LoadingComponent from "./components/loading/LoadingComponent";

const HomePage = lazy(() => import("./page/HomePage"));
const AnimePage = lazy(() => import("./page/AnimePage"));
const SearchPage = lazy(() => import("./page/SearchPage"));
const AnimeDetailPage = lazy(() => import("./page/AnimeDetailPage"));
const CharacterPage = lazy(() => import("./page/CharacterPage"));
const CharacterDetailPage = lazy(() => import("./page/CharacterDetailPage"));
const Error404Page = lazy(() => import("./page/Error404Page"));

import "swiper/css";

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route element={<Main />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/anime"} element={<AnimePage />} />
            <Route path={"/anime/:animeID"} element={<AnimeDetailPage />} />
            <Route path={"/character/"} element={<CharacterPage />} />
            <Route
              path={"/character/:characterID"}
              element={<CharacterDetailPage />}
            />
            <Route path={"/search"} element={<SearchPage />} />
          </Route>

          <Route path={"*"} element={<Error404Page />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
