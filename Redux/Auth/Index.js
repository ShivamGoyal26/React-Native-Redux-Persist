import {createSlice, createSelector} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    value: 'You are not logged in',
    mode: 'App Auth',
  },
  reducers: {
    updatedAuthState(state, action) {
      const {value, mode} = action.payload;
      state.auth = true;
      state.value = value;
      state.mode = mode;
    },
    signOut(state, action) {
      state.auth = false;
      state.value = 'You are not logged in';
      state.mode = 'App Auth';
    },
  },
});

export const {updatedAuthState, signOut} = authSlice.actions;

export default authSlice.reducer;
