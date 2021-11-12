import {combineReducers} from 'redux';

import AuthReducer from './Auth/Index';
import CartReducer from './Cart/Index';
import ThemeReducer from './Theme/Index';

export default combineReducers({
  auth: AuthReducer,
  cart: CartReducer,
  theme: ThemeReducer,
});
