import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";

function Pizzas({setCount}) {
  const [pizzas, setPizzas] = useState([]);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch("http://127.0.0.1:3005")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPizzas(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <input type="text" name="filter" id="filter"
      onChange={(event) => {
        setFilter(event.target.value)

      }}
      />
      {pizzas
      .filter((pizza) => pizza.name.toLowerCase().includes(filter.toLowerCase()))
      .map((pizza) => (
        <Pizza
          name={pizza.name}
          key={pizza.id}
          id={pizza.id}
          price={pizza.price}
          ingredients={pizza.ingredients}
          picture={pizza.picture}
          setCount={setCount}
        />
      ))}
    </div>
  );
}

export default Pizzas;
