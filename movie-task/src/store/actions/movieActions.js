import { axiosWithAuth } from "../../api/axios";

export const POPULAR_MOVIES = "POPULAR MOVIES";
export const LATEST_MOVIES = "LATEST MOVIES";
export const TOP_RATED_MOVIES = "TOP RATED MOVIES";
export const UP_COMING_MOVIES = "UP COMING MOVIES";

export const popularMovies = (popMovies) => {
  return {
    type: POPULAR_MOVIES,
    payload: popMovies,
  };
};

export const getPopularMovies = () => (dispatch) => {
  axiosWithAuth
    .get("/popular")
    .then((res) => {
      dispatch(popularMovies(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const latestMovies = (latestMovies) => {
  return {
    type: LATEST_MOVIES,
    payload: latestMovies,
  };
};

export const getLatestMovies = () => (dispatch) => {
  axiosWithAuth
    .get("/latest")
    .then((res) => {
      dispatch(latestMovies(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const topRatedMovies = (topRatedMovies) => {
  return {
    type: TOP_RATED_MOVIES,
    payload: topRatedMovies,
  };
};

export const getTopRatedMovies = () => (dispatch) => {
  axiosWithAuth
    .get("/top_rated")
    .then((res) => {
      dispatch(topRatedMovies(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const upComingMovies = (upComingMovies) => {
  return {
    type: UP_COMING_MOVIES,
    payload: upComingMovies,
  };
};

export const getUpComingMovies = () => (dispatch) => {
  axiosWithAuth
    .get("/upcoming")
    .then((res) => {
      dispatch(upComingMovies(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
