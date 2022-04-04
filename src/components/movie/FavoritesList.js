import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../actions/MoviesAction';

export default function FavoritesList({ navigation }) {

  const favoriteMovies = useSelector(state => state.movieBox.favorites);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());

  useEffect(() => {
    
    fetchMovies();
    
  }, []);

  return (
    <View style={{ paddingVertical: 10 }}>
      <View style={styles.container}>
        {
          favoriteMovies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} navigation={navigation} />
          ))
        }
      </View >
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 50,
    padding: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    width: '83%',
  },
  containerSearchBar: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  bookmarkPlain: {
    fontSize: 20,
  },
  searchIconContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 5,
    backgroundColor: 'orange',
    width: '17%',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
