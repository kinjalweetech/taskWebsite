// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../Redux/ImagesSlice';
import searchReducer from '../Redux/SearchSlice';


const store = configureStore({
  reducer: {
    images: imageReducer,
    search: searchReducer,
    
  },
});

export default store;



