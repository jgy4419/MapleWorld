// src/store/searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface SearchState {
    search: string;
  }
  
  const initialState: SearchState = {
    search: '',
  };

const searchValue = createSlice({
  name: 'searchRes',
  initialState,
  reducers: {
    searchResult: (state, action: PayloadAction<string>) => {
        state.search = action.payload;
    },
  },
});

export const { searchResult } = searchValue.actions;
export default searchValue.reducer;
