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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Dashboard />} />
      <Route path="tv-series" element={<TvSeries />}></Route>
      <Route path="movies" element={<MovieLayout />}>
        <Route index element={<Movies />} />
        <Route path="detail/:id" element={<MovieDetail />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
