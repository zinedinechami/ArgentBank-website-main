import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
