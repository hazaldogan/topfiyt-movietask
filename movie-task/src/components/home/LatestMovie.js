import { useSelector } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function LatestMovies() {
  const latestMovie = useSelector((store) => store.movieReducer.latest);
  const history = useHistory();
  return (
    <div className="flex flex-col gap-3 p-5 ">
      <h2 className="text-white text-start">Latest Movie</h2>
      <div className="flex flex-wrap gap-3 justify-center items-center">
        <div
          className="flex max-sm:flex-col w-full max-sm:w-full gap-1 justify-center items-center"
          onClick={() => history.push(`/${latestMovie.id}`)}
        >
          <img
            src={
              latestMovie.poster_path != null
                ? `https://image.tmdb.org/t/p/w500/${latestMovie.poster_path}`
                : "https://www.topfiyt.com/template/assets/images/logo.png"
            }
            alt={latestMovie.original_title}
            className="w-[40%] object-contain"
          />
          <div className="text-white justify-center items-center text-start w-[50%] max-sm:w-full max-sm:pt-5 pl-24">
            <h3 className="text-sm">{latestMovie.original_title}</h3>
            <p>{latestMovie.overview}</p>
            <h5 className="text-xs">
              <span className="font-bold">Release Date: </span>
              {latestMovie.release_date != null &&
                latestMovie.release_date
                  .split("-")
                  .reverse()
                  .toString()
                  .replaceAll(",", "/")}
            </h5>
            <div className="flex gap-1 ">
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
                size="sm"
              />
              <h5 className="text-xs text-center m-0">
                {latestMovie.vote_average}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
