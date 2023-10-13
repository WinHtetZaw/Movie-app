import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./components/NotFound";
import MovieLayout from "./layouts/MovieLayout";
import TvLayout from "./layouts/TvLayout";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));

// movies pages
const Movies = lazy(() => import("./pages/Movies"));
const NowPlayingMovies = lazy(() => import("./pages/NowPlayingMovies"));
const UpcomingMovies = lazy(() => import("./pages/UpcomingMovies"));
const TopRatedMovies = lazy(() => import("./pages/TopRatedMovies"));
const MovieSearch = lazy(() => import("./pages/MovieSearch"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));

// tv pages
const TvSeries = lazy(() => import("./pages/TvSeries"));
const TvAiringToday = lazy(() => import("./pages/TvSeries"));
const TvOnTheAir = lazy(() => import("./pages/TvOnTheAir"));
const TvTopRated = lazy(() => import("./pages/TvTopRated"));
const TvDetail = lazy(() => import("./pages/TvDetail"));
const TvSearch = lazy(() => import("./pages/TvSearch"));

const Favorite = lazy(() => import("./pages/Favorite"));

const AccSignup = lazy(() => import("./components/account/AccSignup"));
const AccSignin = lazy(() => import("./components/account/AccSignin"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
        <Route index element={<Dashboard />} />

        <Route path="tv" element={<TvLayout />}>
          <Route path="popular" element={<TvSeries />} />
          <Route path="airing-today" element={<TvAiringToday />} />
          <Route path="on-the-air" element={<TvOnTheAir />} />
          <Route path="top-rated" element={<TvTopRated />} />
          <Route path="detail/:id" element={<TvDetail />} />
          <Route path="search" element={<TvSearch />} />
        </Route>

        <Route path="movie" element={<MovieLayout />}>
          <Route path="popular" element={<Movies />} />
          <Route path="now-playing" element={<NowPlayingMovies />} />
          <Route path="upcoming" element={<UpcomingMovies />} />
          <Route path="top-rated" element={<TopRatedMovies />} />
          <Route path="search" element={<MovieSearch />} />
          <Route path="detail/:id" element={<MovieDetail />} />
        </Route>

        {/* <Route path="search" element={<SearchLayout />}>
          <Route index element={<SearchPage />} />
          <Route path="movie" />
          <Route path="tv" />
        </Route> */}

        <Route path="favorite" element={<Favorite />} />
      </Route>
      <Route path="/sign-up" element={<AccSignup />} />
      <Route path="/sign-in" element={<AccSignin />} />
    </>
  )
);

const App = () => {
  return (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
