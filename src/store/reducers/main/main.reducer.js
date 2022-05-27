import { createSlice } from "@reduxjs/toolkit";
import {getCountries,getOneCountryData} from "./main.asyncActions"

export const mainSlice = createSlice({
  name:'main',
  initialState:{
    loading: null,
    countries:null,
    oneCountryData:null,
    isData:true,

  },
  reducers:{
    setIsData:(state)=>{
      state.isData = true
    }

  },
  extraReducers:{
    [getCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.loading = false;
    },
    [getCountries.rejected]: (state) => {
      state.loading = true;
    },
    [getOneCountryData.fulfilled]: (state, action) => {
     
    const {data,isData} =action.payload
      if(isData){
        state.oneCountryData=data

      }
      else{
        state.isData=isData
      }

      state.loading = false;
    },
    [getOneCountryData.rejected]: (state) => {
      state.loading = true;
      
    },
  }

})

export const {doSome,setIsData} =mainSlice.actions