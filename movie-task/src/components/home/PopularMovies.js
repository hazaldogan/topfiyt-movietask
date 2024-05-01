import { useDispatch, useSelector } from "react-redux";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addFavorite } from "../../store/actions/favMovieActions";
import { data } from "../../data";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function PopularMovies() {
  const popMovies = useSelector((store) => store.movieReducer.popular);
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = popMovies.length > 0 ? popMovies : data;
  const sortedPopMovies = movies.results
    .sort((a, b) => {
      return b.popularity - a.popularity;
    })
    .slice(0, 10);
  const favs = useSelector((store) => store.favMovieReducer.favMovies);
  const [favMovies, setFavMovies] = useLocalStorage("favoriteMovies", favs);

  function favAddClickHandler(movie) {
    setFavMovies([...favs, movie]);
    dispatch(addFavorite(movie));
  }

  return (
    <div className="flex flex-col gap-3 p-5 ">
      <h2 className="text-white text-start">Popular Movies Top 10</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {sortedPopMovies.map((item, i) => (
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
                  {item.release_date
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
