import {
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  LATEST_MOVIES,
  UP_COMING_MOVIES,
} from "../actions/movieActions";

const initialState = {
  popular: [],
  latest: {},
  up_coming: [],
  top_rated: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_MOVIES:
      return {
        ...state,
        popular: action.payload,
      };
    case TOP_RATED_MOVIES:
      return {
        ...state,
        top_rated: action.payload,
      };
    case LATEST_MOVIES:
      return {
        ...state,
        latest: action.payload,
      };
    case UP_COMING_MOVIES:
      return {
        ...state,
        up_coming: action.payload,
      };
    default:
      return state;
  }
};
