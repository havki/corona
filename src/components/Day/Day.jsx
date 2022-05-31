import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateFromISO } from "../../helpers/Date";
import "./Day.css";

function Day() {
  const { recoveredCases } = useSelector((state) => state.main);
  const [bestDay, setBestDay] = useState(null);
  useEffect(() => {
    if(recoveredCases.length){

      let obj = recoveredCases.reduce((prev,cur)=>{
        return cur.recovered>prev.recovered?cur:prev;
      },{recovered:0})
     
      setBestDay(obj);
    }

   
  }, [recoveredCases]);


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
