import { GET_LATEST_MOVIES, GET_MOVIES, ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM, ADD_WATCHED_ITEM, REMOVE_WATCHED_ITEM } from "../actions/MoviesAction";

const INITIAL_STATE = {
  movies: [],
  latestMovies: [],
  favorites: [],
  watched: [],
};

export default function MovieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_MOVIES:
      return { ...state, movies: action.payload };

    case GET_LATEST_MOVIES:
      return { ...state, latestMovies: action.payload };

    case ADD_FAVORITE_ITEM:
      return { ...state, favorites: [...state.favorites, action.payload] };

    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          movie => movie.id !== action.payload.id,
        ),
      };

    case ADD_WATCHED_ITEM:
      return { ...state, watched: [...state.watched, action.payload] };

    case REMOVE_WATCHED_ITEM:
      return {
        ...state,
        watched: state.watched.filter(
          movie => movie.id !== action.payload.id,
        ),
      };

    default:
      return state;

  }
}
