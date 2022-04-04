import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import SearchedList from './SearchedList';
import FavoritesList from './FavoritesList';
import WatchedList from './WatchedList';

export default function MoviesList({ navigation }) {

  const layout = useWindowDimensions();

  const renderScene = SceneMap({
    search: () => <SearchedList navigation={navigation} />,
    favorites: () => <FavoritesList navigation={navigation} />,
    watched: () => <WatchedList navigation={navigation} />
  });

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'search', title: 'Ricerca' },
    { key: 'favorites', title: 'Da vedere' },
    { key: 'watched', title: 'Visti' },
  ]);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View >
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
});
