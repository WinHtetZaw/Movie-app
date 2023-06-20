import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const MyCarousel = ({popularMovieLists,popularTvSeriesLists,isMovie}) => {
  return (
    <div>
      <Splide
        className=" w-[80vw] aspect-video  relative"
        options={{
          gap: 30,
          arrows: true,
          perPage: 2,
          perMove: 1,
          drag: true,
          type: "loop",
          breakpoints: {
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {(isMovie ? popularMovieLists : popularTvSeriesLists)?.map((popularMovieList, index) => (
          <SplideSlide key={index}>
            <img
              src={
                popularMovieList.poster_path
                  ? `https://image.tmdb.org/t/p/w500${popularMovieList.poster_path}`
                  : `https://getuikit.com/v2/docs/images/placeholder_600x400.svg`
              }
              alt=""
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MyCarousel;
