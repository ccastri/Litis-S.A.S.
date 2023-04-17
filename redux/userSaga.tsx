import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from './userSlice';

// Define a function to fetch users from the API
async function fetchUsersApi() {
  const response = await fetch('https://api.example.com/users');
  const data = await response.json();
  return data;
}

// Define the saga function for fetching users
function* fetchUsersSaga(): SagaIterator  {
  try {
    yield put(fetchUsersStart()); // Dispatch the fetchUsersStart action
    const users = yield call(fetchUsersApi); // Call the API to fetch users
    yield put(fetchUsersSuccess(users)); // Dispatch the fetchUsersSuccess action with the fetched data
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message)); // Dispatch the fetchUsersFailure action with the error message
  }
}

// Watch for the fetchUsersStart action and run the fetchUsersSaga
export function* watchFetchUsers() {
  yield takeLatest(fetchUsersStart.type, fetchUsersSaga);
}