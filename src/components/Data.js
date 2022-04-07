import React from "react"
import Currency from "./Currency.js"

function DataList({allCards}){


// const card = allGiftCards.map(card=><h2>{card.id}</h2><h2>{card.title}</h2>)
const cards =allCards.map(card=><div className="card-container"  key={card.id}>
<p><span className="id bold">id:</span>{card.id}</p> 
<p> <span className="title bold">title:</span>{card.title}</p> 

 <ul><span className="currency-title bold">currencies:</span>
 <Currency  currencies = {card.currencies}/> </ul> 
</div >)
  return <div className="cards">
  
{cards}
  
  </div>
}


export default DataList