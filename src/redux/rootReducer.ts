import { combineReducers } from "@reduxjs/toolkit";
import subjectReducer from "./slices/subjectsSlice";

export const rootReducer = combineReducers({
  subjects: subjectReducer,
});
