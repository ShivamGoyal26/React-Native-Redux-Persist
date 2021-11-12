import {createSlice, createSelector} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'auth',
  initialState: {
    cartvalue: 0,
  },
  reducers: {
    updateCartvalue(state, action) {
      state.cartvalue = action.payload;
    },
  },
});

export const {updateCartvalue} = cartSlice.actions;

export default cartSlice.reducer;
