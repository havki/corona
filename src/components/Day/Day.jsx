import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { dateFromISO } from '../../helpers/Date';
import './Day.css'

function Day() {
  const {recoveredCases} = useSelector(state => state.main);
  const [bestDay, setBestDay] = useState(null)
  useEffect(() => {
    
    let obj = recoveredCases.reduce((prev,cur)=>{
      return cur.recovered>prev.recovered?cur:prev;
    },{recovered:-Infinity})
    setBestDay(obj)
  
    
  }, [])
  
  if(!bestDay){
    return null
  }
  return (
    <div className = "day-block">
      <h3>Top recovered cases</h3>
      <h1>45</h1>
      {/* <h4>{dateFromISO(bestDay.date)}</h4> */}
    </div>
  )
}

export default Day