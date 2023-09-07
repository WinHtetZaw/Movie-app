import { useEffect } from "react";
import { BsBookmarkX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFromFavorite } from "../redux/features/favoriteSlice";
import { toast } from "react-hot-toast";
import { BsShareFill, BsFillChatSquareFill } from "react-icons/bs";

const FavoriteCard = ({ el, setIsFavorite }) => {
  const {
    title,
    poster_path,
    backdrop_path,
    name,
    id,
    release_date,
    vote_average,
    first_air_date,
    overview,
  } = el;

  //   const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  let favoriteLists;
  if (localStorage.getItem("theMovieDb-fav")) {
    favoriteLists = JSON.parse(localStorage.getItem("theMovieDb-fav"));
  }

  useEffect(() => {
    if (favoriteLists) {
      setIsFavorite(true);
    }
  }, [setIsFavorite, favoriteLists]);

  const remove = (e) => {
    e.stopPropagation();
    dispatch(removeFromFavorite(el));
    setIsFavorite(false);
    window.location.reload();
    // toast.success("Remove from favorite.");
  };

  return (
    <>
      <div className="movie_card">
        <div className="info_section relative">
          <button
            // onClick={handleFavoriteClick}
            className=" absolute top-2 right-2 flex gap-3 items-center"
          >
            <BsBookmarkX
              onClick={remove}
              className=" text-lg text-orange-500"
            />
          </button>

          <div className="movie_header">
            <img
              className="locandina"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            />
            <h1>{name ?? title}</h1>
            <h4>{release_date ?? first_air_date}</h4>
            <span className="minutes">125 min</span>
            <p className="type">Action, Fantasy</p>
          </div>
          <div className="movie_desc">
            <p className="text line-clamp-3">{overview}</p>
          </div>
          <div className="movie_social">
            <ul className=" flex items-center">
              <li>
                <BsShareFill />
              </li>
              <li>
                <BsFillChatSquareFill />
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
          }}
          className="blur_back tomb_back"
        />
      </div>
      {/* <div className="movie_card" id="ave">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src="https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg"
            />
            <h1>Black Panther</h1>
            <h4>2018, Ryan Coogler</h4>
            <span className="minutes">134 min</span>
            <p className="type">Action, Adventure, Sci-Fi</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              T'Challa, the King of Wakanda, rises to the throne in the
              isolated, technologically advanced African nation, but his claim
              is challenged by a vengeful outsider who was a childhood victim of
              T'Challa's father's mistake.
            </p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                <i className="material-icons"></i>
              </li>
              <li>
                <i className="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back ave_back" />
      </div> */}
    </>
  );
};

export default FavoriteCard;
