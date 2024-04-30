export const ADD_FAVORITE = "ADD TO FAVORITE";
export const FAV_REMOVE = "REMOVE TO FAVORITE LIST";

export const addFavorite = (movie) => {
  return {
    type: ADD_FAVORITE,
    payload: movie,
  };
};
export const removeFavorite = (movieId) => {
  return {
    type: FAV_REMOVE,
    payload: movieId,
  };
};
