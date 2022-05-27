import React from "react";
import { dateFromISO } from "../../helpers/Date";
import "./InfoBlock.css";

function InfoBlock({ item }) {
  const {
    Confirmed,Deaths,Recovered,Active,Date
  } = item;
 
 
 
  

 

  return (
    <div className="infoblock">
      <div className="infoblock__left">
        <h4>{dateFromISO(Date)}</h4>
      </div>
      <div className="infoblock__right">
        <div className="dayInfo-right__row">
          <div className="row-item">
            <h5>Active</h5>
            <div className="row-item__count">
              <h5>{Active}</h5>
            </div>
          </div>
          <div className="row-item">
            <h5>Deaths:</h5>
            <div className="row-item__count">
              <h5>{Deaths}</h5>
            </div>
          </div>
        </div>
        <div className="dayInfo-right__row">
          <div className="row-item">
            <h5>Confirmed:</h5>
            <div className="row-item__count">
              <h5>{Confirmed}</h5>
            </div>
          </div>
          <div className="row-item">
            <h5>Recovered:</h5>
            <div className="row-item__count">
              <h5>{Recovered}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBlock;
