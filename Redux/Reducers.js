import {combineReducers} from 'redux';
import AuthReducer from './Auth/Index';
import CartReducer from './Cart/Index';

export default combineReducers({
  auth: AuthReducer,
  cart: CartReducer,
});
