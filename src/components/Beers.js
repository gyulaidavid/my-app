import React from 'react'
import Beer from './Beer'

function Beers({data}) {
    
  return (
    <div>
     {data.map((beer,index) => {
        return <Beer key={index} beerData={beer}
        index={index}/>
    })}
   
        
    </div>
  )
}

export default Beers