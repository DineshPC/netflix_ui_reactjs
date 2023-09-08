import React from 'react'
import Card from '../Card/Card'
import img1 from "../../../assert/lucifer.jpg"
import "./CardRollStyle.css"

export default function CardRoll(props) {
  return (
    <div className='cardRollContainer'>
        <div className='cardHeading'>
            <p className=''>{props.name}</p>
        </div>
        <div className='cardRollList'>
            <Card name="movie1" img={img1}/>
            <Card name="movie1" img={img1}/>
            <Card name="movie1" img={img1}/>
            <Card name="movie1" img={img1}/>
            <Card name="movie1" img={img1}/>
            <Card name="movie1" img={img1}/>
            <Card name="movie1" img={img1}/>
            <Card name="movie1" img={img1}/>
        </div>
    </div>
    
  )
}
