import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartvalue} from '../Redux/Cart/Index';
import {updatedAuthState, signOut} from '../Redux/Auth/Index';

const Home = props => {
  const auth = useSelector(state => state.auth);
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text>This is the new App {cart.cartvalue}</Text>
        <Text>Status: {auth.value}</Text>
        <Text>Mode: {auth.mode}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(updateCartvalue(5));
          }}>
          <Text>Increase Count</Text>
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
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(signOut());
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
