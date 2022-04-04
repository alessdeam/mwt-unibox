import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import MovieReducer from './MovieReducer';

const movieBoxPersistConfig = {
  key: 'movieBox',
  storage: AsyncStorage,
  whitelist: ['items']
}

const rootReducer = combineReducers({
  movieBox: persistReducer(movieBoxPersistConfig, MovieReducer),
});

export default rootReducer;
