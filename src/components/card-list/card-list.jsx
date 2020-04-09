import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/Card'


export const CardList= (props)=>  {

    return(
        <div className="card-list">
        {props.monstersP.map(monster=>
            <Card key={monster.id} monsterP= {monster}></Card>)}
            </div>
    )
}