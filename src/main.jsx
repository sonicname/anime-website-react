import { render } from 'react-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import LoadingComponent from './components/loading/LoadingComponent';
import ShareLayout from './components/layout/ShareLayout';

const HomePage = lazy(() => import('./page/HomePage'));
const AnimePage = lazy(() => import('./page/AnimePage'));
const SearchPage = lazy(() => import('./page/SearchPage'));
const AnimeDetailPage = lazy(() => import('./page/AnimeDetailPage'));
const CharacterDetailPage = lazy(() =>
  import('./page/CharacterDetailPage')
);
const Error404Page = lazy(() => import('./page/Error404Page'));

import 'swiper/css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient} contextSharing={true}>
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route element={<ShareLayout />}>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/anime'} element={<AnimePage />} />
            <Route
              path={'/anime/:animeID'}
              element={<AnimeDetailPage />}
            />
            <Route
              path={'/character/'}
              element={<SearchPage type={'characters'} />}
            />
            <Route
              path={'/character/:characterID'}
              element={<CharacterDetailPage />}
            />
            <Route
              path={'/search'}
              element={<SearchPage type={'anime'} />}
            />
          </Route>

          <Route path={'*'} element={<Error404Page />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);
