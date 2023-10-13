import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@lottiefiles/lottie-player";
import BackBtn from "../components/BackBtn";
import "./favorite.css";
import FavoriteCard from "../components/FavoriteCard";
import { Button } from "@mantine/core";

const Favorite = () => {
  const { movieLists } = useSelector((state) => state.favoriteSlice);
  const [lists, setLists] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  // * looping movie lists
  const looping = movieLists?.map((el, index) => (
    // <MovieCard {...el} key={el.id} isLoading={false} isMovie={true} />
    <div className=" w-[]" key={index}>
      <FavoriteCard el={el} />
    </div>
  ));

  return (
    <>
      <div className="absolute z-50 top-[100px] left-[20px]">
        <BackBtn />
      </div>
      {movieLists?.length == 0 || !lists ? (
        <div className=" w-full h-screen flex flex-col justify-center items-center">
          <div className=" w-[300px] font-1">
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/938dc2c5-ae79-43c5-9483-627f939d0865/6H4B63XyHy.json"
              style={{ width: "100%" }}
            ></lottie-player>
          </div>
          <div className="flex flex-col gap-3 justify-center text-[#ccc]">
            <h3 className=" text-2xl italic">There is no favorite.</h3>

            <button
              onClick={() => navigate("/movie/popular")}
              className="btn-3"
            >
              click here
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center pt-[200px] pb-10">
            {looping}
          </div>
        </>
      )}
    </>
  );
};

export default Favorite;
