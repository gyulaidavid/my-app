import React, { useEffect, useState } from "react";
import './Pizza.css'

function Pizza({ name, id, ingredients, price, picture, setCount }) {
  //const pizzaName = pizzaData.name
  //const {name} = pizzaData

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(function () {
      console.log(isFavorite , "helló");
    }, 
     // [isFavorite]
    )

    return (
    <div className={"Pizza" + (isFavorite ? ' fav' : '')}> 
      <img onClick={() => {setIsFavorite((oldValue) => !oldValue)}}
      src={isFavorite ? "https://as1.ftcdn.net/v2/jpg/01/09/84/42/1000_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg" : "https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"} alt="csillag" className="favorite"
      />
      
      <p>Sorszám: {id}</p>
      <div><img src={"pictures/" + picture} alt="pizza pictures"/></div>
      <h1>{name} {isFavorite ? 'Kedvenc' : 'Fujjjjj'}</h1>
      <h3>Összetevők: {ingredients}</h3>
      <h2>{price} Ft</h2>
      <button onClick={() => {
        setCount((oldValue) => 
          oldValue+1
        )
      }}>Kosárba</button>
      <hr />
    </div>
  );
}

export default Pizza;
//"https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"

//setIsFavorite(!setIsFavorite)