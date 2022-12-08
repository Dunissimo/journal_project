import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/interfaces";

interface IInitial {
  list: IUser[];
}

const initialState: IInitial = {
  list: [],
};

const usersSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    loadUsers(state, action: PayloadAction<IUser[]>) {
      state.list = action.payload;
    },
  },
});

export const { loadUsers } = usersSlice.actions;
export default usersSlice.reducer;
