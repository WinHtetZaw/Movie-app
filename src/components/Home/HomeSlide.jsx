import { AiTwotoneStar } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const HomeSlide = ({ hoverObj }) => {
  const navigate = useNavigate();
  const isObjEmpty = Object.keys(hoverObj).length;
  return (
    <>
      {isObjEmpty ? (
        <section>
          <h2 className="my-5 text-2xl font-bold">
            {hoverObj.title ?? hoverObj.name}
          </h2>

          {/* rating  */}
          <div className="mb-2 flex items-center gap-1">
            <AiTwotoneStar className=" text-yellow-500" />
            <p>{hoverObj.vote_average} / 10</p>
          </div>

          {/* overview  */}
          <p className="mb-2 min-h-[80px] italic text-opacity-90 line-clamp-3">
            {hoverObj.overview}
          </p>

          <div className="flex items-center gap-3 mb-5">
            <button className="btn-1 text-sm rounded text-slate-800 bg-slate-50 capitalize click-animation">
              play now
            </button>
            <button className="btn-1 whitespace-nowrap w-fit text-sm rounded capitalize click-animation">
              + my whitelist
            </button>

            <FaShare className=" click-animation" />
          </div>
        </section>
      ) : (
        <section className=" text-[#cccccc]">
          <h1 className="my-5 text-2xl font-bold">
            Welcome to CinematicVerse: Your Ultimate Movie Destination!
          </h1>
          <p className="mb-5 italic text-opacity-90 line-clamp-3">
            Dive into a world of captivating storytelling, heart-pounding
            action, and unforgettable emotions at CinematicVerse. As your
            premier online movie hub, we bring you the latest in cinematic
            magic, all conveniently at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 mb-5">
            {/* movie btn  */}
            <button
              onClick={() => navigate("/movie/popular")}
              className="relative group whitespace-nowrap w-fit capitalize click-animation"
            >
              <span>view all movies</span>
              <div className="w-[20px] group-hover:w-full transition-all duration-150">
                <HiOutlineArrowNarrowRight className=" ml-auto text-[20px]" />
              </div>
            </button>

            {/* tv btn  */}
            <button
              onClick={() => navigate("/tv/popular")}
              className="relative group whitespace-nowrap w-fit capitalize click-animation"
            >
              <span>view all tv series</span>
              <div className="w-[20px] group-hover:w-full transition-all duration-150">
                <HiOutlineArrowNarrowRight className=" ml-auto text-[20px]" />
              </div>
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default HomeSlide;
