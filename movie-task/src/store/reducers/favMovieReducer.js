import { ADD_FAVORITE, FAV_REMOVE } from "../actions/favMovieActions";

const initialState = {
  favMovies: [],
};

export const favMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
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
