import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import React, { useEffect } from 'react';
import { getLatestMovies } from '../../actions/MoviesAction';
import { useDispatch, useSelector } from 'react-redux';
import MovieCarouselCard from './MovieCarouselCard';

const CARD_WIDTH = SCREEN_WIDTH * 0.8;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SPACING_FOR_CARD_INSET = SCREEN_WIDTH * 0.1 - 10;

const MoviesCarousel = ({ navigation }) => {

  const latestMovies = useSelector(state => state.movieBox.latestMovies);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getLatestMovies());

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        style={{ maxWidth: SCREEN_WIDTH, marginVertical: 15 }}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
      >
        {latestMovies.map((movie) => (
          <MovieCarouselCard movie={movie} key={movie.id} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MoviesCarousel;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 'auto',
    height: 300,
    margin: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {
    width: 220,
    height: 280,
    backgroundColor: 'gray',
  },
  text: {
    flex: 1,
    fontSize: 22,
    color: 'white',
    paddingRight: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
