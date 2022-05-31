import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateFromISO } from "../../helpers/Date";
import { clearRecoveredCases } from "../../store/reducers/main/main.reducer";
import "./Day.css";

function Day() {
  const { recoveredCases } = useSelector((state) => state.main);
  const [bestDay, setBestDay] = useState(null);
  const dispatch =  useDispatch()
  useEffect(() => {
    // if(recoveredCases.length){

    //   let obj = recoveredCases.reduce((prev,cur)=>{
    //     return cur.recovered>prev.recovered?cur:prev;
    //   },{recovered:0})
     
    //   console.log(obj);
    // }

    if (recoveredCases.length) {
      let max = recoveredCases[0].recovered;
      for (let i = 0; i < recoveredCases.length; i++) {
        if (recoveredCases[i].recovered > max) {
          max = recoveredCases[i].recovered;
        }
      }
      let current = recoveredCases.filter((item) => item.recovered === max);
      setBestDay(current[0]);
    }
  }, [recoveredCases]);


  // useEffect(() => {
  
  //   dispatch(clearRecoveredCases())
    
  // }, [dispatch])
  

  return (
    bestDay && (
      <div className="day-block">
        <h3>Top recovered cases</h3>
        <h1>{bestDay.recovered}</h1>
        <h4>{dateFromISO(bestDay.date)}</h4>
      </div>
    )
  );
}

export default Day;
