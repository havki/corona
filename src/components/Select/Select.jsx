import { MenuItem, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneCountryData } from '../../store/reducers/main/main.asyncActions'

function Select() {
  const {countries} = useSelector(state=>state.main)
  const [country, setCountry] = useState("Kyrgyzstan")
  const dispatch =useDispatch()
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(()=>{
    dispatch(getOneCountryData(country))
  },[dispatch,country])

  if(!countries){
    return null
  }
  return (
    <TextField
    id="outlined-select-currency"
    select
    label="Select"
    value={country}
    onChange={handleChange}
    helperText="Please select your country"
  >
    {countries.map((option,index) => (
      <MenuItem key={index} value={option.Country}>
        {option.Country}
      </MenuItem>
    ))}
  </TextField>
  )
}

export default Select