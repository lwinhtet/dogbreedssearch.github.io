import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/dogs/dogsApiSlice';

const store = configureStore({
  reducer: {
    // By wrapping apiSlice.reducerPath in square brackets, it's used as a computed property key.
    // This means that the key for the property is determined dynamically based on the value of apiSlice.reducerPath.
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // The getDefaultMiddleware function returns an array of default middleware that Redux Toolkit recommends for most applications.
  middleware: (getDefaultMiddleware) => {
    // This adds the default middleware along with the middleware defined in the apiSlice to the store's middleware pipeline.
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

// types based on our store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
