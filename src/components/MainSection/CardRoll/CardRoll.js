import React from 'react'
import Card from '../Card/Card'
import img1 from "../../../assert/lucifer.jpg"
import img2 from "../../../assert/money_heist.jpg"
import img3 from "../../../assert/king_of_land.jpg"
import "./CardRollStyle.css"

export default function CardRoll(props) {

  let cardId = props.cardId;
  let a = "#"+cardId
  let box = document.querySelector(a.toString());

  let click_previous_btn = () => {
    let width = window.innerWidth;
    box.scrollLeft = box.scrollLeft - (width/1.3);
  }

  let click_next_btn = () => {
    let width = window.innerWidth;
    box.scrollLeft = box.scrollLeft + (width/1.3);
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
            <Card name="movie1" img={img1}/>
            <Card name="movie2" img={img2}/>
            <Card name="movie3" img={img3}/>
            <Card name="movie4" img={img1}/>
            <Card name="movie5" img={img2}/>
            <Card name="movie6" img={img3}/>
            <Card name="movie7" img={img1}/>
            <Card name="movie8" img={img2}/>
            <Card name="movie9" img={img3}/>
            <Card name="movie10" img={img1}/>
            <Card name="movie11" img={img2}/>
            <Card name="movie12" img={img3}/>
            <Card name="movie13" img={img1}/>
            <Card name="movie14" img={img2}/>
            <Card name="movie15" img={img3}/>
            <Card name="movie16" img={img1}/>
            <Card name="movie17" img={img2}/>
            <Card name="movie18" img={img3}/>
            <Card name="movie19" img={img1}/>
            <Card name="movie20" img={img2}/>
        </div>
        
    </div>
    
  )
}
