import { useGetTvDetailQuery } from "../redux/services/tvSeriesApi";
import { RingProgress } from "@mantine/core";
import PageLoading from "../components/PageLoading";
import { useNavigate, useParams } from "react-router-dom";
import BackBtn from "../components/BackBtn";

const TvDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetTvDetailQuery(id);
  const navigate = useNavigate();

  // * variables define
  const percentage = data?.vote_average.toFixed(1) * 10;
  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <div
          style={{
            backgroundImage:
              `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})` ??
              `url(https://getuikit.com/v2/docs/images/placeholder_600x400.svg)`,
          }}
          className=" min-h-screen max-h-full bg-fixed bg-cover bg-center bg-no-repeat"
        >
          <BackBtn />
          <div className=" min-h-screen pt-[120px] md:pt-[160px] pb-16 flex flex-col md:flex-row  bg-opacity-80  bg-[#25262b] ">
            {/* left  */}
            <div className=" w-[200px] md:w-4/12 rounded-lg overflow-hidden p-5">
              <img
                className=" rounded h-full md:h-fit w-full object-contain max-w-[350px]"
                src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                alt=""
              />
            </div>
            {/* right  */}
            <div className=" md:w-8/12 text-slate-200 p-5">
              <div className=" flex flex-col gap-2">
                <h1 className=" text-3xl font-semibold font-serif pb-2 ">
                  {data?.name}
                </h1>

                {/* genre tags  */}
                <div className=" flex flex-wrap items-center gap-2 py-2">
                  {data?.genres?.map((genre) => (
                    <div
                      className="hvr-radial-in text-sm flex items-center justify-center py-1 px-2 min-w-[6rem] rounded-sm bg-gradient-to-r from-[#005C97] to-[#1CB5E0] text-slate-800"
                      key={genre.id}
                    >
                      #{genre.name}
                    </div>
                  ))}
                </div>

                {/* volt  */}
                <div className=" my-2 w-[50px] h-[50px] bg-[#1a1b1e] rounded-full">
                  <RingProgress
                    rootColor="#1a1b1e"
                    size={50}
                    thickness={4}
                    roundCaps
                    sections={[{ value: percentage, color: "#0084C7" }]}
                    label={
                      <div className=" text-sky-600 text-sm text-center">
                        {percentage}%
                      </div>
                    }
                  />
                </div>

                <div className=" ">
                  <span className="opacity-90 ">{data?.status}</span>
                  <span className="opacity-90 uppercase">
                    &nbsp;-&nbsp;{data?.original_language}
                  </span>
                </div>

                <p>First air date - {data?.first_air_date}</p>
                <p>Number of seasons - {data?.number_of_seasons}</p>
                <p>Number of episodes - {data?.number_of_episodes}</p>
              </div>
              <div className=" font-sans italic text-slate-200 text-sm py-2">
                {data?.tagline}
              </div>

              {/* Overview */}
              <div
                className={` ${
                  !data?.overview && "hidden"
                } font-1 py-2 tracking-[0.15rem]`}
              >
                <h2 className=" text-lg font-semibold mb-3 tracking-[0.2rem]">
                  Overview
                </h2>
                <p className=" font-sans text-slate-200">{data?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TvDetail;
