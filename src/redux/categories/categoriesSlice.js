import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under construction',
  },
  reducers: {
  },
});

export default categoriesSlice.reducer;
