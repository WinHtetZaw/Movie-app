import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "@lottiefiles/lottie-player";
import BackBtn from "../components/BackBtn";

const Favorite = () => {
  const { movieLists } = useSelector((state) => state.favoriteSlice);
  const [lists, setLists] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

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
      <BackBtn />
      {lists?.length == 0 || !lists ? (
        <div className=" w-full h-screen flex flex-col justify-center items-center">
          <div className=" w-[300px] font-1">
            <lottie-player
              autoplay
              loop
              mode="normal"
              // src="https://lottie.host/40dd66eb-aad2-412f-ab9f-8dd184b7d9ed/xrYAJsQVbP.json"
              src="https://lottie.host/938dc2c5-ae79-43c5-9483-627f939d0865/6H4B63XyHy.json"
              style={{ width: "100%" }}
            ></lottie-player>
          </div>
          <div className="flex flex-col gap-3 justify-center text-[#ccc]">
            <h3 className=" text-2xl italic">There is no favorite.</h3>
            <button onClick={() => navigate("/movie/popular")}>
              <div className="relative inline-block text-sm font-medium text-rose-500 group active:text-rose-600 focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-rose-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  <h5>Add</h5>
                </span>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid-1 pt-[200px] pb-10">{looping}</div>
        </>
      )}
    </>
  );
};

export default Favorite;
