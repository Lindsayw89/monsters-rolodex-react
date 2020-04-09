import React from 'react';
import './card.styles.css'

export const Card =(props)=> (
<div className="card-container">
    <img alt="monster" src ={`https://robohash.org/${props.monsterP.id}?set=set2`}/>
    <h2> {props.monsterP.name}</h2>
    <h3>{props.monsterP.email}</h3>
</div>

)