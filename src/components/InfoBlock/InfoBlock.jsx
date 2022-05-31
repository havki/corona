import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { dateFromISO } from "../../helpers/Date";
import { setRecoveredCases } from "../../store/reducers/main/main.reducer";
import "./InfoBlock.css";

function InfoBlock({ item }) {
  const { Confirmed, Deaths, Active, Date } = item;
  const [rand, setRand] = useState(0);
  const dispatch = useDispatch();

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const data = {
        date: Date,
        recovered,
      };
      dispatch(setRecoveredCases(data));
      setRand(recovered);
    } else {
      isMounted.current = true;
    }
  }, []);

  let prc = (Deaths / Active) * 100;
  let recovered = 0;
  if (prc > 1) {
    recovered = Math.round(Math.random() * prc * Deaths);
  } else {
    recovered = Math.round(Math.random() * (prc * 2) * Deaths);
  }

  return (
    rand && (
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
                <h5>{rand}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default InfoBlock;
