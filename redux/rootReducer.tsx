import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './userSlice';


// Combina los reducers en un root reducer
const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;