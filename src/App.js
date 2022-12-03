import './App.css';
import { useState } from 'react';
import Pizzas from './components/Pizzas';
import Cart from './components/Cart';
/* import beersData from './components/data'
import Beers from './components/Beers'
import Button from './components/Button'
import ButtonStateChange from './components/ButtonStateChange' */

function App() {
 
const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Button/>
      <ButtonStateChange/>
      <Beers data={beersData.cards}/> */}
      <Cart count={count}/>
      <Pizzas setCount={setCount}/>
    </div>
  );
}

export default App;

