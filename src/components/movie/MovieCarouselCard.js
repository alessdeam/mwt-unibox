import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';

import { IMAGE_PATH } from '../../costants';
import { TouchableOpacity } from 'react-native-web';

const MovieCarouselCard = ({ movie, navigation }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('MovieDetailPage', { movie: movie })}>
        <Image style={styles.image} source={IMAGE_PATH + movie.poster_path} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingVertical: 20,
        }}
      >
        <Text style={styles.text}>{movie.title}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default MovieCarouselCard;
