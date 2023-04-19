import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from './userSlice';

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
// Define a function to fetch users from the API
async function fetchUsersApi() {
  const response = await fetch('http://localhost:5000/users');
  const data = await response.json();
  return data;
}

// Define the saga function for fetching users
function* fetchUsersSaga(): SagaIterator<User[]>  {
  try {
    yield put(fetchUsersStart()); // Dispatch the fetchUsersStart action
    const users: User[] = yield call(fetchUsersApi); // Call the API to fetch users
    yield put(fetchUsersSuccess(users)); // Dispatch the fetchUsersSuccess action with the fetched data
    return users
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message)); // Dispatch the fetchUsersFailure action with the error message
    return []
  }
}

// Watch for the fetchUsersStart action and run the fetchUsersSaga
export function* watchFetchUsers(): SagaIterator<User[]> {
  yield takeLatest(fetchUsersStart.type, fetchUsersSaga);
  return []
}