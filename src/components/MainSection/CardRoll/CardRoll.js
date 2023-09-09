import React from 'react'
import Card from '../Card/Card'
import img1 from "../../../assert/lucifer.jpg"
import "./CardRollStyle.css"

export default function CardRoll(props) {

  let cardId = props.cardId;
  let a = "#"+cardId
  let box = document.querySelector(a.toString());

  let click_previous_btn =  () => {
    let width = window.innerWidth;
    box.scrollLeft = box.scrollLeft - (width/1.1);
  }

  let click_next_btn = () => {
    let width = window.innerWidth;
    box.scrollLeft = box.scrollLeft + (width/1.1);
  }

  return (
    <div className='cardRollContainer'>
        <div className='cardHeading'>
            <p className=''>{props.name}</p>
        </div>
        <div className='back-forward-btn'>
          <button className='previous-btn' onClick={click_previous_btn}>&lt;</button>
          <button className='next-btn' onClick={click_next_btn}>&gt;</button>
        </div>
        <div className='cardRollList' id={props.cardId}>
            <Card name="movie1" img={img1}/>1
            <Card name="movie1" img={img1}/>2
            <Card name="movie1" img={img1}/>3
            <Card name="movie1" img={img1}/>4
            <Card name="movie1" img={img1}/>5
            <Card name="movie1" img={img1}/>6
            <Card name="movie1" img={img1}/>7
            <Card name="movie1" img={img1}/>8
            <Card name="movie1" img={img1}/>9
            <Card name="movie1" img={img1}/>10
        </div>
        
    </div>
    
  )
}
