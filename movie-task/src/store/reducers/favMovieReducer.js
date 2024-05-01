import { ADD_FAVORITE, FAV_REMOVE } from "../actions/favMovieActions";
import { Flip, toast } from "react-toastify";

const initialState = {
  favMovies: [],
};

export const favMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      toast.success("Added to favorites!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
      let movie;
      let foundedMovie;
      if (action.payload) {
        movie = action.payload;
        foundedMovie = state.favMovies.find((item) => movie.id === item.id);
      }
      return {
        ...state,
        favMovies:
          foundedMovie !== undefined
            ? [...state.favMovies]
            : [...state.favMovies, action.payload],
      };
    case FAV_REMOVE:
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => action.payload !== movie.id
        ),
      };

    default:
      return state;
  }
};
