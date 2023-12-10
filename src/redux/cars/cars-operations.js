import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65716c37d61ba6fcc01278bc.mockapi.io/api/";

// getCars
export const getCars = createAsyncThunk(
  "cars/get",
  async (credentials, thunkAPI) => {
    const { page = 1, limit = 12 } = credentials;
    try {
      const { data } = await axios.get(`cars?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
