import { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import LoadingComponent from "./components/loading/LoadingComponent";

const HomePage = lazy(() => import("./page/HomePage"));
const AnimePage = lazy(() => import("./page/AnimePage"));
const SearchPage = lazy(() => import("./page/SearchPage"));
const AnimeDetailPage = lazy(() => import("./page/AnimeDetailPage"));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route element={<Main />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/anime"} element={<AnimePage />} />
            <Route path={"/anime/:animeID"} element={<AnimeDetailPage />} />
            <Route path={"/search"} element={<SearchPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
