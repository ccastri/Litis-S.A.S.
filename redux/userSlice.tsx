import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// Create a slice for user data
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Export the actions
export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;