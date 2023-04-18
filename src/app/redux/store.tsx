import { configureStore, applyMiddleware  } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga'; 
// import menuIconReducer from './features/menuSlice'
// import basketReducer from './features/basketSlice'
// import authReducer from './features/authSlice'
// ... 
// Crea el middleware de saga
const sagaMiddleware = createSagaMiddleware();

// Obtén los middlewares predeterminados de Redux Toolkit

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware], // Agrega el middleware de Redux-Saga
});

sagaMiddleware.run(rootSaga); // Ejecuta tu root saga en el middleware de Redux-Saga