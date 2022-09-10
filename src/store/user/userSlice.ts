import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  info: {};
  darkMode: boolean;
  history: string[];
}

const initialState: UserState = {
  info: {},
  darkMode: false,
  history: [] as string[],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    addNewHistory: (state, action) => {
      state.history.push(action.payload as string);
    },
    removeHistory: (state, action) => {
      state.history = state.history.filter((item) => item !== action.payload);
    },
  },
});

export const { setDarkMode, addNewHistory, removeHistory } = userSlice.actions;
export default userSlice.reducer;
