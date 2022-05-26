import { Container } from '@mui/system';
import './App.css';
import Day from './components/Day/Day';
import InfoBlock from './components/InfoBlock/InfoBlock';

function App() {
  return (
    <div className="App">
     <div className="header">
      sadasdasd
     </div>
     <div className="main">
      <div className="left">
        <div className="grid">
          {
            [1,2,3,4,5].map(item=>{
              return(
                <InfoBlock/>
              )
            })
          }
        </div>
       
      </div>
      <div className="right">
       <Day/>
      </div>
     </div>
    </div>
  );
}

export default App;
