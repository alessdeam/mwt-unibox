import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/pages/HomePage';
import MovieDetailPage from './src/pages/MovieDetailPage';

import { HeaderBack } from './src/components/header/header-option';
import GlobalContextProvider from './src/context/global';
import { Provider } from 'react-redux';
import createStore from './src/stores';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createStackNavigator();

const { store, persistor } = createStore();

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalContextProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Home"
                  component={HomePage}
                  options={{
                    ...headerOptions,
                    title: 'MovieBox',
                  }}
                />

                <Stack.Screen
                  name="MovieDetailPage"
                  component={MovieDetailPage}
                  options={{
                    ...headerOptions,
                    headerTitleContainerStyle: {
                      display: 'none',
                    },
                    headerLeft: () => <HeaderBack />
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </GlobalContextProvider>
        </PersistGate>
      </Provider>
    );
  }
}

const headerOptions = {
  animationEnabled: false,
  headerTitleStyle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingTop: 30,
  },
  headerStyle: { backgroundColor: '#000', borderBottomColor: 'none' },
};

export default App;