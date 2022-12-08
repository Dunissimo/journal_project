import { combineReducers } from "@reduxjs/toolkit";
import subjectReducer from "./slices/subjectsSlice";
import userReducer from "./slices/usersSlice";

export const rootReducer = combineReducers({
  subjects: subjectReducer,
  users: userReducer,
});
