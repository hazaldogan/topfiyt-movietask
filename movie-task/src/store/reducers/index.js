import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { favMovieReducer } from "./favMovieReducer";

export const reducers = combineReducers({
  movieReducer,
  favMovieReducer,
});
