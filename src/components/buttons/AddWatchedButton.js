import React from 'react';

import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const AddWatchedButton = () => {
  return <Icon style={styles.bookmarkPlain} name="eye" color="#fff" />;
};

export default AddWatchedButton;

const styles = StyleSheet.create({
  bookmarkPlain: {
    fontSize: 30,
  },
});
