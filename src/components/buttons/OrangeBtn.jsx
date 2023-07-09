import { useDispatch } from "react-redux";
import { addGenreId } from "../../redux/features/genreSlice";

// this btn is for movies and tvs sort by genres not found

const OrangeBtn = () => {
  const dispatch = useDispatch();
  return (
    // <button className=" active:scale-95">
    //   <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
    //     <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
    //     <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
    //       <h5>{text}</h5>
    //     </span>
    //   </a>
    // </button>

    <button
      onClick={() => dispatch(addGenreId(0))}
      className=" active:scale-95"
    >
      <a className="relative inline-block text-sm font-medium text-[#3da2f1] group active:text-sky-500 focus:outline-none focus:ring">
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#3da2f1] group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <h5>Show All</h5>
        </span>
      </a>
    </button>
  );
};

export default OrangeBtn;
