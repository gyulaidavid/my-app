import './App.css';
import beersData from './components/data'
import Beers from './components/Beers'
import Button from './components/Button'
import ButtonStateChange from './components/ButtonStateChange'

function App() {
 
  return (
    <div className="App">
      <Button/>
      <ButtonStateChange/>
      <Beers data={beersData.cards}/>
    </div>
  );
}

export default App;

