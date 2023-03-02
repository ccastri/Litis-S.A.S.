import { configureStore } from '@reduxjs/toolkit'
import menuIconReducer from './features/menuSlice'
// import basketReducer from './features/basketSlice'
// import authReducer from './features/authSlice'
// ...
export const store = configureStore({
    reducer: {
        menu: menuIconReducer,
        // basket: basketReducer,
        // auth: authReducer,
    },
})
