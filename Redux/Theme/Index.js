import {createSlice, createSelector} from '@reduxjs/toolkit';
import {lightMode, darkMode} from '../../Constants/Colors';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'light',
    colors: lightMode,
  },
  reducers: {
    updateTheme(state, action) {
      state.currentTheme = action.payload;
      state.colors = action.payload === 'light' ? lightMode : darkMode;
    },
  },
});

export const {updateTheme} = themeSlice.actions;

export default themeSlice.reducer;
