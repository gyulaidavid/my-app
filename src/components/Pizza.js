import React, { useState } from "react";
import './Pizza.css'

function Pizza({ name, id, ingredients, price, picture }) {
  //const pizzaName = pizzaData.name
  //const {name} = pizzaData

    const [isFavorite, setIsFavorite] = useState(false)
  
    return (
    <div className={"Pizza" + (isFavorite ? ' fav' : '')}> 
      <img onClick={() => 
        setIsFavorite(true)
      }
      src="https://as1.ftcdn.net/v2/jpg/01/09/84/42/1000_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg" alt="csillag" className="favorite"/>
      <p>Sorszám: {id}</p>
      <h1>{name} {isFavorite ? 'Kedvenc' : 'Fújjjjj'}</h1>
      <h3>Összetevők: {ingredients}</h3>
      <h2>{price} Ft</h2>
      <hr />
    </div>
  );
}

export default Pizza;
