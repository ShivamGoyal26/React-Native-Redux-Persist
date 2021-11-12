import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './Redux/Store';
import Home from './Screens/Home';
import Splash from './Screens/Splash';

const App = props => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (splash) {
    return <Splash />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
