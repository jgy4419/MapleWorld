import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./exampleSlice";
import searchValue from "./searchValue";

const rootReducer = combineReducers({
    example: exampleReducer,
    searchRes: searchValue
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;