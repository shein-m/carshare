import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsApi } from "./cars/cars-slice";

const rootReducer = combineReducers({
  // redusers
  [carsApi.reducerPath]: carsApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    carsApi.middleware,
  ],
});

export default store;
