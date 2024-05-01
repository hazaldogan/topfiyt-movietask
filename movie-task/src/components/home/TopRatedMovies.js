import { useDispatch, useSelector } from "react-redux";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addFavorite } from "../../store/actions/favMovieActions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { data } from "../../data";

export default function TopRatedMovies() {
  const topRatedMovies = useSelector((store) => store.movieReducer.top_rated);
  const history = useHistory();
  const dispatch = useDispatch();
  const favList = useSelector((store) => store.favMovieReducer.favMovies);
  const movies = topRatedMovies.length > 0 ? topRatedMovies : data;
  const sortedTopMovies = movies.results
    .sort((a, b) => {
      return b.vote_average - a.vote_average;
    })
    .slice(0, 10);

  function favAddClickHandler(movie) {
    dispatch(addFavorite(movie));
  }

  return (
    <div className="flex flex-col gap-3 p-5 ">
      <h2 className="text-white text-start">Top Rated Movies Top 10</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {sortedTopMovies.map((item, i) => (
          <div className="flex">
            <div
              className="flex w-56 max-sm:w-full gap-1 cursor-pointer"
              key={i}
              onClick={() => history.push(`/${item.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.original_title}
                className="w-[40%] object-contain"
              />
              <div className="text-white text-start ">
                <h3 className="text-sm">{item.original_title}</h3>
                <h5 className="text-xs">
                  {item.release_date != null &&
                    item.release_date
                      .split("-")
                      .reverse()
                      .toString()
                      .replaceAll(",", "/")}
                </h5>
                <div className="flex gap-1  items-center">
                  <FontAwesomeIcon
                    className="text-yellow-500"
                    icon={faStar}
                    size="sm"
                  />
                  <h5 className="text-xs text-center m-0">
                    {item.vote_average}
                  </h5>
                </div>
              </div>
            </div>
            <FontAwesomeIcon
              className="text-red-700 px-2 cursor-pointer"
              icon={faHeart}
              size="sm"
              onClick={() => favAddClickHandler(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
