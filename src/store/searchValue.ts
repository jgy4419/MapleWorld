import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    search: string;
    selectTitle: string;
    worldName: string;
    listContainerId: string;
    userListLength: number,
    guildListLength: number
}
  
  const initialState: SearchState = {
    search: "",
    selectTitle: "user",
    worldName: "",
    listContainerId: "",
    userListLength: 0,
    guildListLength: 0
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
    },
    worldNameChange: (state, action: PayloadAction<string>) => {
      state.worldName = action.payload;
    },
    listContainerChange: (state, action: PayloadAction<any>) => {
      state.listContainerId = action.payload;
    },
    userListLengthChange: (state) => {
      state.userListLength += 20;
    },
    guildListLengthChange: (state) => {
      state.guildListLength += 20;
    }
  },
});

export const { 
  searchResult, 
  selectTitleChange,
  worldNameChange, 
  listContainerChange,
  userListLengthChange,
  guildListLengthChange
 } = searchValue.actions;
export default searchValue.reducer;
