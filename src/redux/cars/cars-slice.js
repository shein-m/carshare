import { getCars } from "./cars-operations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  page: 1,
  error: null,
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state.cars = [];
      state.page = 1;
    },

    setPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      state.error = null;
    });

    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars.push(...action.payload);
      state.error = null;
    });

    builder.addCase(getCars.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
