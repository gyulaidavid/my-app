import './App.css';
import beersData from './components/data'
import Beers from './components/Beers'


function App() {
 
  return (
    <div className="App">
      <Beers data={beersData.cards}/>
    </div>
  );
}

export default App;

