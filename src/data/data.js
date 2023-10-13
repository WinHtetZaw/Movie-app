export const movieDataPathnames = {
  title: { name: "movies", pathname: "movie" },
  links: ["popular", "now playing", "upcoming", "top rated"],
};

export const tvDataPathnames = {
  title: { name: "tv series", pathname: "tv" },
  links: ["popular", "airing today", "on the air", "top rated"],
};

export const modalPopupVariant = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      stiffness: 300,
      damping: 13,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.4,
    transition: {
      duration: 0.2,
    },
  },
};
