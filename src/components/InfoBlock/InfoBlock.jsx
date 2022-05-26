import React from "react";
import "./InfoBlock.css";

function InfoBlock() {
  return (
    <div className="infoblock">
      <div className="infoblock__left">
        <h4>28 july</h4>
      </div>
      <div className="infoblock__right">
        <div className="dayInfo-right__row">
          <div className="row-item">
          <h5>Coamfirmed;</h5>
            <div className="row-item__count">
              <h5>3564</h5>
            </div>
            
          </div>
          <div className="row-item">
            <h5>Coamfirmed;</h5>
            <div className="row-item__count">
              <h5>3564</h5>
            </div>
          </div>
        </div>
        <div className="dayInfo-right__row">
          <div className="row-item">
          <h5>Coamfirmed;</h5>
            <div className="row-item__count">
              <h5>3564</h5>
            </div>
          </div>
          <div className="row-item">
          <h5>Coamfirmed;</h5>
            <div className="row-item__count">
              <h5>3564</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBlock;
