import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image
} from 'react-native';
import { IMAGE_PATH } from '../costants';
import { GlobalContext } from '../context/global';
import Valuation from '../components/movie/valuation';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-web';
import AddFavoriteButton from '../components/buttons/AddFavoriteButton';
import RemoveFavoriteButton from '../components/buttons/RemoveFavoriteButton';
import AddWatchedButton from '../components/buttons/AddWatchedButton';
import RemoveWatchedButton from '../components/buttons/RemoveWatchedButton';
import { addFavorite, addWatched, removeFavorite, removeWatched } from '../actions/MoviesAction';

const MovieDetailPage = ({ route }) => {
  const { movie } = route.params;
  const { genders } = useContext(GlobalContext);

  const favorites = useSelector(state => state.movieBox.favorites);
  const watched = useSelector(state => state.movieBox.watched);
  const dispatch = useDispatch();

  const addToFavorites = movie => dispatch(addFavorite(movie));
  const removeFromFavorites = movie => dispatch(removeFavorite(movie));
  const handleAddFavorite = movie => {
    addToFavorites(movie);
  };
  const handleRemoveFavorite = movie => {
    removeFromFavorites(movie);
  };
  const existsFavorite = movie => {
    if (favorites.filter(item => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };

  const addToWatched = movie => dispatch(addWatched(movie));
  const removeFromWatched = movie => dispatch(removeWatched(movie));
  const handleAddWatched = movie => {
    addToWatched(movie);
  };
  const handleRemoveWatched = movie => {
    removeFromWatched(movie);
  };
  const existsWatched = movie => {
    if (watched.filter(item => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };

  const genderName = (genderList = []) =>
    genders
      .filter((gender) => genderList.includes(gender.id))
      .map((gender) => gender.name)
      .slice(0, 2)
      .join('/ ');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.headerTitle}>{movie.title}</Text>
        <View style={styles.containerResume}>
          <View style={{ position: 'relative', marginLeft: -30 }}>
            <Image
              style={{
                width: 200,
                height: 300,
                backgroundColor: 'gray',
                marginLeft: 27
              }}
              source={IMAGE_PATH + movie.poster_path}
            />
          </View>
          <View style={styles.containerRight}>
            <Text style={styles.textGender}>{genderName(movie.genre_ids)}</Text>
            <View>
              <Valuation text={movie.vote_average} />
            </View>
            <View style={styles.containerButtons}>
              {!existsWatched(movie) && <TouchableOpacity
                onPress={() =>
                  handleAddWatched(movie)
                }
              >
                <View style={{ paddingRight: 30 }}>
                  <AddWatchedButton />
                </View>
              </TouchableOpacity>}
              {existsWatched(movie) && <TouchableOpacity
                onPress={() =>
                  handleRemoveWatched(movie)
                }
              >
                <View style={{ paddingRight: 30 }}>
                  <RemoveWatchedButton />
                </View>
              </TouchableOpacity>}
              {!existsFavorite(movie) && <TouchableOpacity
                onPress={() =>
                  existsFavorite(movie) ? handleRemoveFavorite(movie) : handleAddFavorite(movie)
                }
              >
                <View style={{ paddingRight: 30 }}>
                  <AddFavoriteButton />
                </View>
              </TouchableOpacity>}
              {existsFavorite(movie) && <TouchableOpacity
                onPress={() =>
                  existsFavorite(movie) ? handleRemoveFavorite(movie) : handleAddFavorite(movie)
                }
              >
                <View style={{ paddingRight: 30 }}>
                  <RemoveFavoriteButton />
                </View>
              </TouchableOpacity>}
            </View>
            <View style={[styles.containerCinema, { marginBottom: 20 }]}>
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.title}>Trama</Text>
          <Text style={styles.description}>{movie.overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    maxHeight: '100%',
    overflow: 'hidden',
  },
  scrollContainer: {
    flex: 1,
    padding: 30,
    overflow: 'scroll',
  },
  book: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgb(202, 132, 4);',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  ticket: {
    position: 'absolute',
    left: 40,
    fontSize: 36,
    marginRight: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  containerResume: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRight: {
    flex: 1,
    padding: 20,
    position: 'relative',
    height: '100%',
  },
  containerCinema: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerShip: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    padding: 10,
    width: 120,
    marginBottom: 10,
  },
  textShip: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  textDuration: {
    color: 'gray',
    fontSize: 22,
    fontWeight: '400',
    paddingBottom: 10,
  },
  textGender: {
    color: 'orange',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 15,
  },
  containerValuation: {
    position: 'absolute',
    bottom: 0,
    left: 25,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  description: {
    fontWeight: '400',
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
  },
});
