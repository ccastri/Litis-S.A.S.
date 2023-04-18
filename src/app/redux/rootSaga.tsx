import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { watchFetchUsers } from './userSaga';

// Root saga that combines all sagas

export default function* rootSaga() {
  yield all([
    // Add other sagas here if you have any
    watchFetchUsers(), // Add the fetchUsers saga
  ]);
}