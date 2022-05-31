import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Day from "./components/Day/Day";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import Select from "./components/Select/Select";
import { getCountries } from "./store/reducers/main/main.asyncActions";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { setIsData } from "./store/reducers/main/main.reducer";

function App() {
  const dispatch = useDispatch();
  const { oneCountryData, isData } = useSelector((state) => state.main);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    !isData && notify();
    return () => {
      dispatch(setIsData());
    };
  }, [isData, dispatch]);

  // console.log(Date.now('2022-05-23T00:00:00Z'));

  const notify = () => toast.warn("There is no information!!");

  return (
    <div className="App">
      <ToastContainer />

      <div className="main">
        <div className="header">
          <Select />
        </div>
        <div className="left">
          <div className="grid">
            {oneCountryData &&
              oneCountryData.map((item) => {
                return <InfoBlock key={item.ID} item={item} />;
              })}
          </div>
        </div>
      </div>

      <div className="right">
        <Day />
      </div>
    </div>
  );
}

export default App;
