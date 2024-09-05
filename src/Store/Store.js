// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../Redux/ImagesSlice';
import searchReducer from '../Redux/SearchSlice';
// import photosReducer from '../Redux/ImagesSlice'

const store = configureStore({
  reducer: {
    images: imageReducer,
    search: searchReducer,
    // photos: photosReducer,
  },
});

export default store;



