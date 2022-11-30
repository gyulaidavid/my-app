import React from 'react'
import {pizzas} from '../data/pizza_data'
import Pizza from './Pizza'

function Pizzas() {
  return (
    <div>
     {pizzas.map(pizza => <Pizza name={pizza.name} key={pizza.id} id={pizza.id} price={pizza.price} ingredients={pizza.ingredients}/>) }   

    </div>
  )
}

export default Pizzas