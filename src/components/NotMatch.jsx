import { useDispatch } from "react-redux";
import { addGenreId } from "../redux/features/genreSlice";

const NotMatch = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h3>No movie found.Go to another page.</h3>
      <p>OR</p>
      <p>Remove some genres.</p>
      <button onClick={() => dispatch(addGenreId(0))} className="btn-3">
        Show All
      </button>
    </>
  );
};

export default NotMatch;
