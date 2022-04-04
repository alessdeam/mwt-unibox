export const GET_MOVIES = 'GET_MOVIES';
export const GET_LATEST_MOVIES = 'GET_LATEST_MOVIES';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';
export const ADD_WATCHED_ITEM = 'ADD_WATCHED_ITEM';
export const REMOVE_WATCHED_ITEM = 'REMOVE_WATCHED_ITEM';
import axios from 'axios';
import { API_KEY, API_URL } from '../costants';

export function getMovies(keyword) {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`);
      if (res.data && keyword != undefined) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data.results,
        });
      }
    };
  } catch (error) {
    console.log('Errore');
  }
};

export function getLatestMovies(sortBy = null) {
  const url = new URL(`${API_URL}/discover/movie`);

  const params = {
    api_key: API_KEY,
    sortBy,
  };

  url.search = new URLSearchParams(params).toString();
  try {
    return async dispatch => {
      const res = await axios.get(url);
      if (res.data) {
        dispatch({
          type: GET_LATEST_MOVIES,
          payload: res.data.results,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};

export const addFavorite = movie => dispatch => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: movie,
  });
};
export const removeFavorite = movie => dispatch => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: movie,
  });
};

export const addWatched = movie => dispatch => {
  dispatch({
    type: ADD_WATCHED_ITEM,
    payload: movie,
  });
};
export const removeWatched = movie => dispatch => {
  dispatch({
    type: REMOVE_WATCHED_ITEM,
    payload: movie,
  });
};