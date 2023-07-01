import './App.css';
import Player from './Components/Player';
import Players from './Components/Players';

function App() {
  return (
    <div className="App">
   
    {
    Players.map((Item,index)=>(<Player Key={index} {...Item}  />))
  }
    </div>
  );
}

export default App;
