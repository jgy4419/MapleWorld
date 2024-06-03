import { combineReducers } from "@reduxjs/toolkit";
import searchValue from "./searchValue";

const rootReducer = combineReducers({
    searchRes: searchValue
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;