import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './Redux/Store';
import Home from './Screens/Home';
import SplashScreen from 'react-native-splash-screen';
import Splash from './Screens/Splash';

const App = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
