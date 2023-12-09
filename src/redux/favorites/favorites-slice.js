import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites(state, action) {
      return [...state, action.payload];
    },

    removeFromFavorites(state, action) {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});
