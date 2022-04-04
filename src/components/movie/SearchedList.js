import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MovieCard from './MovieCard';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../actions/MoviesAction';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchedList({ navigation }) {
  const movies = useSelector(state => state.movieBox.movies);
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState('');
  const [searched, setCheck] = useState(false);
  function fetchMovies() {
    dispatch(getMovies(text));
    setCheck(true);
  }

  return (
    <View style={{ paddingVertical: 15 }}>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.containerSearchBar}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Titolo"
            />
            <TouchableOpacity style={styles.searchIconContainer} onPress={fetchMovies} disabled={text === '' || text === 'undefined' || text === undefined}>
              <Icon style={styles.bookmarkPlain} name="search" color="#fff" />
            </TouchableOpacity>
          </View>
        </SafeAreaView >
        {
          searched && movies.map((movie, index) => (
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
    minHeight: 270
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
