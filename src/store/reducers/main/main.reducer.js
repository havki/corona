import { createSlice } from "@reduxjs/toolkit";
import { getCountries, getOneCountryData } from "./main.asyncActions";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    loading: null,
    countries: null,
    oneCountryData: null,
    isData: true,
    recoveredCases: [],
  },
  reducers: {
    setIsData: (state) => {
      state.isData = true;
    },
    setRecoveredCases: (state,action) => {
      if(state.recoveredCases.length >4){
        state.recoveredCases=[]
      }
      state.recoveredCases.push(action.payload)
    },
   
  },
  extraReducers: {
    [getCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.loading = false;
    },
    [getCountries.rejected]: (state) => {
      state.loading = true;
    },
    [getOneCountryData.fulfilled]: (state, action) => {
      const { data, isData } = action.payload;
      if (isData) {
        if (data.length === 5) state.oneCountryData = data;
        else {
          let initialArr = action.payload.data;

          let summObj = {};
          for (let i = 0; i < initialArr.length; i++) {
            const element = initialArr[i];
            if (summObj[element.Date]) {
              summObj[element.Date] = {
                Confirmed: summObj[element.Date].Confirmed + element.Confirmed,
                Deaths: summObj[element.Date].Deaths + element.Deaths,
                Recovered: summObj[element.Date].Recovered + element.Recovered,
                Active: summObj[element.Date].Active + element.Active,
                Date: element.Date,
                ID: element.ID
              };
            } else {
              summObj[element.Date] = {
                Confirmed: 0,
                Deaths: 0,
                Recovered: 0,
                Active: 0,
                Date: element.Date,
                ID: element.ID
              };
            }
          }
          state.oneCountryData = Object.values(summObj);
        }
      } else {
        state.isData = isData;
      }

      state.loading = false;
    },
    [getOneCountryData.rejected]: (state) => {
      state.loading = true;
    },
  },
});

export const { doSome, setIsData,setRecoveredCases,} = mainSlice.actions;
