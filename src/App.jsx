import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import MovieDetail from "./pages/MovieDetail";
import MovieLayout from "./layouts/MovieLayout";
import TvLayout from "./layouts/TvLayout";
import TvDetail from "./pages/TvDetail";
import SearchLayout from "./layouts/SearchLayout";
import SearchPage from "./pages/SearchPage";
import AccSignup from "./components/account/AccSignup";
import AccSignin from "./components/account/AccSignin";
import { Toaster } from "react-hot-toast";
import Favorite from "./pages/Favorite";
import NowPlayingMovies from "./pages/NowPlayingMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import TopRatedMovies from "./pages/TopRatedMovies";
import MovieSearch from "./pages/MovieSearch";
import TvSearch from "./pages/TvSearch";
import TvOnTheAir from "./pages/TvOnTheAir";
import TvAiringToday from "./pages/TvAiringToday";
import TvTopRated from "./pages/TvTopRated";
import "./App.css"

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

        <Route path="search" element={<SearchLayout />}>
          <Route index element={<SearchPage />} />
          <Route path="movie" />
          <Route path="tv" />
        </Route>

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
      <RouterProvider router={router} />
    </>
  );
};

export default App;
