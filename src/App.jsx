import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
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
import RouteGuard from "./components/RouteGuard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      
      <Route index element={<Dashboard />} />
      <Route path="tv" element={<TvLayout />}>
        <Route index element={<TvSeries />} />
        <Route path="detail/:id" element={<TvDetail />} />
      </Route>
      <Route path="movie" element={<MovieLayout />}>
        <Route index element={<Movies />} />
      </Route>
      <Route path="movie/detail/:id" element={<MovieDetail />} />
      <Route path="search" element={<SearchLayout />}>
        <Route index element={<SearchPage />} />
        <Route path="movie" />
        <Route path="tv" />
      </Route>

      <Route path="sign-up" element={<AccSignup />} />
      <Route path="sign-in" element={<AccSignin />} />
      <Route path="favorite" element={<Favorite />} />
    </Route>
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
