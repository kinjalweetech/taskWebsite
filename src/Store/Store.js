import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../Redux/SearchSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    // images: imageReducer,
  },
});

export default store;
