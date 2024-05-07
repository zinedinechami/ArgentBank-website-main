import { createSlice } from "@reduxjs/toolkit";

// todo: mettre en place un selector dans le dashboard

// SLICE DEF
// permet de diviser un partie spécifique du state global de l'application, ici l'etat du user
// permet de generer automatiquement des actions pour chaque reducer

// REDUCER DEF
// determine comment l'app evolue par rapport au differentes actions du state

// ACTIONS DEF

// initialise un slice
export const userSlice = createSlice({
  // nom du slice avec l'état initial qui est null
  name: "user",
  initialState: {
    user: null,
  },
  // objet des reducers, gere l'etat des mis a jour en fonction des actions qu'elle recoit
  // ici on recoit un login qui met a jour le user state avec action payload(payload qui permet de recevoir des informations supplémentaire)
  // Lorsque l'action login est dispatchée (envoyée au store Redux), le réducteur modifie l'état en attribuant action.payload à state.user.
  // cela met à jour la valeur de state.user avec les données de l'utilisateur fourni, qui est l'information passée en tant que payload de l'action.
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
  },
});

// userSlice.actions va generer automatiquement les creation d'action defini par le redcuer login
// login qui va etre utilisé pour dispatcher avec les info du user dans le payload
export const { login } = userSlice.actions;

// le reducer va donc etre utilisé par le store
export default userSlice.reducer;
