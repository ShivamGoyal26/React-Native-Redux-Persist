import React from 'react';
import {View, Text} from 'react-native';

const Splash = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text style={{color: 'white'}}>This is the splash screen</Text>
    </View>
  );
};

export default Splash;
