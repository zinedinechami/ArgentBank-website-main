import { createSlice } from "@reduxjs/toolkit";

// todo: explain slice

// Slice permet donc de définir les actions et le reducer qui va avec d’un seul coup

// reducer, fonction qui contient le state actuel et l'objet action

// objet action, contient un type (description de la categorie de l'action) et un payload (information sur ce qui se passe)

// ?recuper avec un selector le parcel dans le store

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
