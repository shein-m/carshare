import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65716c37d61ba6fcc01278bc.mockapi.io/api/";

// getCars
export const getCars = createAsyncThunk(
  "cars/get",
  async (credentials, thunkAPI) => {
    let params = "";

    if (credentials) {
      const { page = 1, limit = 12 } = credentials;
      params = `?page=${page}&limit=${limit}`;
    }

    try {
      const { data } = await axios.get(`cars${params}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

// getFiltersCars
export const getFilterCars = createAsyncThunk(
  "filterCars/get",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`cars`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
