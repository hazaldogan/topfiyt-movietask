import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../store/actions/favMovieActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function FavoriteMovies() {
  const favMovies = useSelector((store) => store.favMovieReducer.favMovies);
  const dispatch = useDispatch();
  const history = useHistory();

  function removeFavClickHandler(movieId) {
    dispatch(removeFavorite(movieId));
  }

  return (
    <div className="p-10">
      <div className="flex flex-col gap-3 p-5 ">
        <h2 className="text-white text-start">Favorite Movies</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {favMovies.map((item, i) => (
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
                icon={faTrash}
                size="sm"
                onClick={() => removeFavClickHandler(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
