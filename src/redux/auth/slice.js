import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRegError: false,
  isLogError: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [register.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRegError = false;
        state.isLoading = false;
      },
      [register.pending](state, _action) {
        state.isLoading = true;
      },
      [register.rejected](state, _action) {
        state.isRegError = true;
        state.isLoading = false;
      },
      [logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLogError = false;
        state.isLoading = false;
      },
      [logIn.pending](state, _action) {
        state.isLoading = true;
      },
      [logIn.rejected](state, _action) {
        state.isLogError = true;
        state.isLoading = false;
      },
      [logOut.fulfilled](state, _action) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRegError = false;
        state.isLogError = false;
        state.isRefreshing = false;
      },
      [refreshUser.pending](state) {
        state.isRefreshing = true;
      },
      [refreshUser.fulfilled](state, action) {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      },
      [refreshUser.rejected](state) {
        state.isRefreshing = false;
      },
    },
});

export const authReducer = authSlice.reducer;