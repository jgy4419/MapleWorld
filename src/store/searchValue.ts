// src/store/searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    search: string;
    selectTitle: string;
}
  
  const initialState: SearchState = {
    search: "",
    selectTitle: "user",
  };

const searchValue = createSlice({
  name: 'searchRes',
  initialState,
  reducers: {
    searchResult: (state, action: PayloadAction<string>) => {
        state.search = action.payload;
    },
    selectTitleChange: (state, action: PayloadAction<string>) => {
        state.selectTitle = action.payload
    }
  },
});

export const { searchResult, selectTitleChange } = searchValue.actions;
export default searchValue.reducer;
