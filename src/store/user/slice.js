import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const idToAddFav = action.payload;
      if (state.favorites.includes(idToAddFav)) {
        state.favorites = state.favorites.filter((id) => id !== idToAddFav);
      } else {
        state.favorites = [...state.favorites, idToAddFav];
      }
    },
  },
});

export const { toggleFavorites } = userSlice.actions;

export default userSlice.reducer;
