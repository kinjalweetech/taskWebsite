// src/redux/slices/ImageSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Dummy API URLs for different categories (these are examples; replace them with real URLs)
const API_URLS = {
  Mountain: 'https://jsonplaceholder.typicode.com/photos?_limit=10&albumId=1',
  Bird: 'https://jsonplaceholder.typicode.com/photos?_limit=10&albumId=2',
  Food: 'https://jsonplaceholder.typicode.com/photos?_limit=10&albumId=3',
  Beach: 'https://jsonplaceholder.typicode.com/photos?_limit=10&albumId=4',
};

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (category) => {
    const response = await fetch(API_URLS[category]);
    const data = await response.json();
    return { category, data };
  }
);

const imageSlice = createSlice({
  name: 'images',
  initialState: {
    images: {},
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images[action.payload.category] = action.payload.data;
      })
      .addCase(fetchImages.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default imageSlice.reducer;
