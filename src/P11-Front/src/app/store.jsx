import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

// le store contien le state global de l'application
// et donc tout les reducer qui gere la mise a jour du state

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
