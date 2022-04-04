import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import MoviesList from '../components/movie/MoviesList';
import MoviesCarousel from '../components/movie/MoviesCarousel';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={styles.containerTitle}>
      <Text style={styles.title}>Film in uscita</Text>
    </View>
      <MoviesCarousel navigation={navigation}/>
      
      <MoviesList navigation={navigation}/>

      <StatusBar style="light" />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    overflow: 'hidden',
    maxWidth: '100%',
    paddingTop: 20,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
