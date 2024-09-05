// // redux/photoSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { apiKey } from '../Component/Api/Config';

// // Thunk to fetch photos
// export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async (query) => {
//   const response = await axios.get(
//     `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
//   );
//   return response.data.photos.photo;
// });

// const photoSlice = createSlice({
//   name: 'photos',
//   initialState: {
//     images: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPhotos.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchPhotos.fulfilled, (state, action) => {
//         state.images = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchPhotos.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       });
//   },
// });

// export default photoSlice.reducer;


// src/redux/imageSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiKey } from '../Component/Api/Config';

// Thunk to fetch images
export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (query) => {
    const response = await axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    );
    return response.data.photos.photo;
  }
);

// Slice to handle images state
const imageSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default imageSlice.reducer;
