import { createSlice } from "@reduxjs/toolkit";

export interface User{ 
  // id: number,
  firstName: string;
  lastName: string;
  phoneNumber: string;
  department: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  city: string;
  neighborhood: string;
  tos_is_clicked: boolean;
  dateOfExpedition: Date;
  dateOfBirth: Date;
  // isAuth:boolean,
  // isGoogle:boolean
  // idPicture: File | string[],
}

// Define initial state
// const initialState = {
//   user: null,
//   isLoading: false,
//   error: null
// };
export interface UserState{
  user: User[] | [] | null
  isLoading: boolean,
  error: string| null
}

  const initialState: UserState = {
    user: [],
    isLoading: false,
    error: null,
  };

// Create auth slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    // ! Here status is null cause idf bout it :)
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.user = null;
    },
    logoutError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

// Export the auth actions
export const {
  login,
  loginSuccess,
  loginError,
  logout,
  logoutSuccess,
  logoutError
} = authSlice.actions;

// Export the auth reducer
export default authSlice.reducer;