import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { data } from "../../data";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const history = useHistory();
  const upComingMovies = useSelector((store) => store.movieReducer.up_coming);
  const movies = upComingMovies.length > 0 ? upComingMovies : data;
  const sortedMovies = movies.results
    .sort((a, b) => {
      return b.release_date - a.release_date;
    })
    .slice(0, 5);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === sortedMovies.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? sortedMovies.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const newSlides = sortedMovies.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <div className="flex items-center text-start relative max-sm:justify-center max-sm:text-center">
          <div className="w-full">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              className="w-full h-screen object-cover"
            />
          </div>
          <div className=" flex flex-col gap-9 my-9 ml-[15%] max-sm:justify-center max-sm:m-0 max-sm:w-[70%] absolute max-sm:text-center max-sm:items-center">
            <h1 className="text-neutral-300 text-6xl max-sm:text-xl font-bold">
              {item.original_title}
            </h1>
            <h4 className="text-neutral-400 text-xl max-sm:text-xs w-[50%]">
              {item.overview}
            </h4>
            <div className="flex justify-between items-center">
              <button
                className="bg-teal-400 py-3 px-2 w-[25%] max-sm:w-[50%] rounded text-white text-xl max-sm:text-sm font-bold"
                onClick={() => history.push(`/${item.id}`)}
              >
                Detail
              </button>
              <h2 className="text-sm text-neutral-300 font-bold m-10">
                Release Date: {item.release_date}
              </h2>
            </div>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={sortedMovies}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {newSlides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
