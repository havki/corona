import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";

export const getCountries = createAsyncThunk(
  "countries/get",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await axios.get(`/countries`);
      if (!res?.data) {
        throw new Error();
      }
      return res.data;
    } catch (error) {
      return rejectedWithValue(error.res.data);
    }
  }
);

export const getOneCountryData = createAsyncThunk(
  "country/get",
  async (country, { rejectedWithValue }) => {
    let isData=true
    try {
      const res = await axios.get(
        `/live/country/${country}/status/confirmed/date/2022-05-21T13:13:30Z`
      );
      if (!res?.data) throw new Error();
      if (!res.data.length) isData= false
      console.log(isData);
      return {data:res.data,isData}
    } catch (error) {
      return rejectedWithValue(error.res.data);
    }
  }
);
