import './App.css';
import beersData from './components/data'
import Beers from './components/Beers'
import Button from './components/Button';


function App() {
 
  return (
    <div className="App">
      <Button/>
      <Beers data={beersData.cards}/>
    </div>
  );
}

export default App;

