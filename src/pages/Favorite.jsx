import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const Favorite = () => {
    const { movieLists } = useSelector((state) => state.favoriteSlice);
  const [lists, setLists] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);




  useEffect(() => {
    const movieLocalLists = JSON.parse(localStorage.getItem("theMovieDb-fav"));
    setLists(movieLocalLists);
  }, []);

//   movieLocalLists.length > 0 && console.log("favorite -----", movieLocalLists);

  // * looping movie lists
  const looping = lists?.map((el) => (
    <MovieCard {...el} key={el.id} isLoading={false} isMovie={true} />
  ));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-5 min-[500px]:gap-y-10 sm:gap-7">
        {looping}
      </div>
    </>
  );
};

export default Favorite;
