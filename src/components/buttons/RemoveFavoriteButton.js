import React from 'react';

import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const RemoveFavoriteButton = () => {
  return <Icon style={styles.bookmarkPlain} name="bookmark" color="#fff" />;
};

export default RemoveFavoriteButton;

const styles = StyleSheet.create({
  bookmarkPlain: {
    fontSize: 30,
  },
});
