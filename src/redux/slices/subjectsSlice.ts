import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISubject } from "../../utils/interfaces";

interface IInitial {
  list: ISubject[];
  currentSb: ISubject;
}

const initialState: IInitial = {
  list: [],
  currentSb: { name: "", id: "" },
};

const subjectsSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    loadSubjects(state, action: PayloadAction<ISubject[]>) {
      state.list = action.payload;
    },
    loadSubject(state, action: PayloadAction<ISubject>) {
      state.currentSb = action.payload;
    },
  },
});

export const { loadSubjects, loadSubject } = subjectsSlice.actions;
export default subjectsSlice.reducer;
