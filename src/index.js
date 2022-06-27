import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppBar from 'components/AppBar';
import Section from 'components/Section';
import './index.css';

const Home = lazy(() => import('pages/Home' /* webpackChunkName: "home" */));
const Movies = lazy(() =>
  import('pages/Movies' /* webpackChunkName: "movies" */)
);
const MovieDetails = lazy(() =>
  import('pages/MovieDetails' /* webpackChunkName: "movie-details" */)
);
const NoMatch = lazy(() =>
  import('pages/NoMatch' /* webpackChunkName: "no-match" */)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies/">
    <AppBar />

    <Suspense fallback={<Section>Loading...</Section>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
