import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {updateCartvalue} from '../Redux/Cart/Index';
import {updatedAuthState, signOut} from '../Redux/Auth/Index';
import {updateTheme} from '../Redux/Theme/Index';

const Home = props => {
  const auth = useSelector(state => state.auth);
  const cart = useSelector(state => state.cart);
  const theme = useSelector(state => state.theme);
  const colors = useSelector(state => state.theme.colors);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: colors.primaryColor}}>
        <Text style={{color: colors.textColor}}>
          This is the new App {cart.cartvalue}
        </Text>
        <Text style={{color: colors.textColor}}>Status: {auth.value}</Text>
        <Text style={{color: colors.textColor}}>Mode: {auth.mode}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(updateCartvalue(5));
          }}>
          <Text style={{color: colors.textColor}}>Increase Count</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(
              updatedAuthState({
                value: 'you are logged in',
                mode: 'App NoAuth',
              }),
            );
          }}>
          <Text style={{color: colors.textColor}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(signOut());
          }}>
          <Text style={{color: colors.textColor}}>Logout</Text>
        </TouchableOpacity>
        <Text style={{color: colors.textColor}}>
          Current theme: {theme.currentTheme}
        </Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(
              updateTheme(theme.currentTheme === 'light' ? 'dark' : 'light'),
            );
          }}>
          <Text style={{color: colors.textColor}}>
            {theme.currentTheme === 'light'
              ? 'Change Theme to Dark'
              : 'Change Theme to Light'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
