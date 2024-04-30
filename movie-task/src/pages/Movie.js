import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosWithAuth } from "../api/axios";
import { faStar, faFire, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axiosWithAuth
      .get(`/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id]);

  return (
    <div className="p-10 flex max-sm:flex-col text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
        className="w-[50%]"
      />
      <div className="flex flex-col text-start pl-10 gap-5">
        <h2 className="text-5xl">{movie.original_title}</h2>
        <p className="text-2xl">{movie.overview}</p>

        <div className="flex gap-5">
          <div className="flex gap-1  items-center">
            <FontAwesomeIcon
              className="text-yellow-500"
              icon={faStar}
              size="sm"
            />
            <h5 className="text-xs text-center m-0">
              {movie.vote_average} / {movie.vote_count}
            </h5>
          </div>
          <div className="flex gap-1  items-center">
            <FontAwesomeIcon className="text-red-700" icon={faFire} size="sm" />
            <h5 className="text-xs text-center m-0">{movie.popularity}</h5>
          </div>
        </div>
        <p className="text-sm">
          <span className="font-bold">Language:</span>{" "}
          {movie.original_language.toUpperCase()}
        </p>
        <p className="text-sm">
          <span className="font-bold">Release Date:</span> {movie.release_date}
        </p>

        <button className="bg-gray-500 py-3 px-2 w-[25%] max-sm:w-[50%] rounded text-white text-sm max-sm:text-sm font-bold">
          <FontAwesomeIcon
            className="text-red-700 pr-2"
            icon={faHeart}
            size="lg"
          />
          Add To Favorites
        </button>
      </div>
    </div>
  );
}
