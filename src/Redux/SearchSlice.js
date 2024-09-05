import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      // Correctly mutating the draft state
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
