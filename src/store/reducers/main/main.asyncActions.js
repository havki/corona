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
    let isData = true;
    // const today = new Date().toISOString();
    // const firstTen =  today.substring(0,10)
    // console.log(firstTen);

    let timestamp = Date.now();
    let fiveDaysAgo = 5*86400000;
    let date = new Date(timestamp-fiveDaysAgo);
    let currentDateISO = date.toISOString();
    const firstTenDigits =  currentDateISO.substring(0,10)
    
    
    try {
      const res = await axios.get(
        `/live/country/${country}/status/confirmed/date/${firstTenDigits}T13:13:30Z`
      );
      if (!res?.data) throw new Error();
      if (!res.data.length) isData = false;
      return { data: res.data, isData };
    } catch (error) {
      return rejectedWithValue(error.res.data);
    }
  }
);
