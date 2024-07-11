import { combineReducers } from "@reduxjs/toolkit";
import searchValue from "./searchValue";
import eventValue from "./eventValue";

const rootReducer = combineReducers({
    searchRes: searchValue,
    eventStore: eventValue
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;