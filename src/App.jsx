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
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
