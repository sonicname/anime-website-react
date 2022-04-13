import { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";

const HomePage = lazy(() => import("./page/HomePage"));
const AnimePage = lazy(() => import("./page/AnimePage"));
const GenrePage = lazy(() => import("./page/GenrePage"));
const SearchPage = lazy(() => import("./page/SearchPage"));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<Fragment>loading...</Fragment>}>
        <Routes>
          <Route element={<Main />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/anime"} element={<AnimePage />} />
            <Route path={"/genre"} element={<GenrePage />} />
            <Route path={"/search"} element={<SearchPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
