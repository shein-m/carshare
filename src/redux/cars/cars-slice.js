import { getCars, getFilterCars } from "./cars-operations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  filterCars: [],
  page: 1,
  error: null,
  hideLoadMore: false,
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state.cars = [];
      state.page = 1;
      state.hideLoadMore = false;
    },

    setPage(state) {
      state.page = state.page + 1;
    },

    showFilteredData(state, action) {
      state.cars = action.payload;
      state.hideLoadMore = true;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      state.error = null;
    });

    builder.addCase(getCars.fulfilled, (state, action) => {
      if (action.payload.length === 0) {
        state.hideLoadMore = true;
        return;
      }
      state.cars.push(...action.payload);
      state.error = null;
    });

    builder.addCase(getCars.rejected, (state, action) => {
      state.error = action.payload;
    });

    // filter
    builder.addCase(getFilterCars.pending, (state) => {
      state.error = null;
    });

    builder.addCase(getFilterCars.fulfilled, (state, action) => {
      state.filterCars.push(...action.payload);
      state.error = null;
    });

    builder.addCase(getFilterCars.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
