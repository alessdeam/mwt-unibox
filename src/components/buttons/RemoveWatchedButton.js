import React from 'react';

import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const RemoveWatchedButton = () => {
  return <Icon style={styles.bookmarkPlain} name="eye-slash" color="#fff" />;
};

export default RemoveWatchedButton;

const styles = StyleSheet.create({
  bookmarkPlain: {
    fontSize: 30,
  },
});
