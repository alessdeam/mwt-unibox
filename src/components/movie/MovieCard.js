import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { GlobalContext } from '../../context/global';
import Valuation from './Valutation';
import { IMAGE_PATH } from '../../costants';
import { TouchableOpacity } from 'react-native-web';
import AddFavoriteButton from '../buttons/AddFavoriteButton';
import RemoveFavoriteButton from '../buttons/RemoveFavoriteButton';
import AddWatchedButton from '../buttons/AddWatchedButton';
import RemoveWatchedButton from '../buttons/RemoveWatchedButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite, addWatched, removeWatched } from '../../actions/MoviesAction';

const MovieCard = ({ movie, navigation }) => {

  const { genders } = useContext(GlobalContext);

  const genderName = (genderList = []) =>
    genders
      .filter((gender) => genderList.includes(gender.id))
      .map((gender) => gender.name)
      .slice(0, 2)
      .join('/ ');

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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MovieDetailPage', { movie: movie })}>
        <Image
          style={{
            width: 120,
            height: '100%',
          }}
          source={IMAGE_PATH + movie.poster_path}
        />
      </TouchableOpacity>

      <View style={styles.containerCenter}>
        <Text style={styles.textTitle}>{movie.original_title}</Text>
        <Text style={styles.textGender}>{genderName(movie.genre_ids)}</Text>

        <View style={styles.containerValuation}>
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
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  containerCenter: {
    flex: 1,
    position: 'relative',
    padding: 25,
    paddingBottom: 50,
  },
  containerValuation: {
    position: 'absolute',
    bottom: 0,
    left: 25,
  },
  containerBookmark: {
    alignItems: 'flex-end',
    paddingTop: 25,
  },
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDuration: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '400',
    paddingBottom: 10,
  },
  textGender: {
    color: 'orange',
    fontSize: 16,
    fontWeight: '400',
  },
});
