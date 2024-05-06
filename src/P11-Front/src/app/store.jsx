import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

// le store contien le state global de l'application

// la seul maniere de changer l'etat est de faire un dispatch une action(du splice) a l'interieur d'ici

// ? dispatch dans le store, a partir du state
// faire un configur store
// lui donner un reducer de base, tout les autres reducers

// fichier route reducer ou on appelle tout les reducers

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

//  todo: finish creating store
