import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SliderCarousel = ({
  movieLists,
  tvSeriesLists,
  isMovie,
}) => {
  return (
    <div>
      <Splide
        className=" relative"
        options={{
          gap: 20,
          arrows: true,
          perPage: 3,
          perMove: 1,
          drag: true,
          type: "loop",
            breakpoints: {
              300 : {
                gap : 10
              }
            },
        }}
      >
        {(isMovie ? movieLists : tvSeriesLists)?.map(
          (list, index) => (
            <SplideSlide key={index}>
              <img
              className=" rounded"
                src={
                  list.poster_path
                    ? `https://image.tmdb.org/t/p/w500${list.poster_path}`
                    : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
                }
                alt=""
              />
              <h2 className=" w-full line-clamp-3 min-[300px]:line-clamp-2 text-slate-50 mt-5">
                {list.name ?? list.title}
              </h2>
              <p className=" text-slate-400">
                {list.release_date}
              </p>
            </SplideSlide>
          )
        )}
      </Splide>
    </div>
  );
};

export default SliderCarousel;
