import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";

function Pizzas() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3005")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPizzas(data);
      });
  }, []);

  return (
    <div>
      {pizzas.map((pizza) => (
        <Pizza
          name={pizza.name}
          key={pizza.id}
          id={pizza.id}
          price={pizza.price}
          ingredients={pizza.ingredients}
          picture={pizza.picture}
        />
      ))}
    </div>
  );
}

export default Pizzas;
