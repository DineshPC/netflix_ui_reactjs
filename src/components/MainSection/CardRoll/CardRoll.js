import React, { useRef, useState } from 'react';
import Card from '../Card/Card';
import img1 from '../../../assert/lucifer.jpg';
import img2 from '../../../assert/money_heist.jpg';
import img3 from "../../../assert/king_of_land.jpg"
import './CardRollStyle.css';

export default function CardRoll(props) {

  const a = props.cardItems;
  console.log(a);

  const cardListRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const clickPreviousBtn = () => {
    if (cardListRef.current) {
      const width = window.innerWidth;
      const newPosition = scrollPosition - width / 1.3;
      cardListRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const clickNextBtn = () => {
    if (cardListRef.current) {
      const width = window.innerWidth;
      const newPosition = scrollPosition + width / 1.3;
      cardListRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="cardRollContainer">
      <div className="cardHeading">
        <p className="">{props.cardItems.name}</p>
      </div>
      <div className="back-forward-btn">
        <button className="previous-btn" onClick={clickPreviousBtn}>
          &lt;
        </button>
        <button className="next-btn" onClick={clickNextBtn}>
          &gt;
        </button>
      </div>
      <div className="cardRollList" ref={cardListRef}>
        {props.cardItems.movies.map((movie, index) => (
          <Card key={index} name={movie.movie_name} img={movie.movie_img} />
        ))}
      </div>

    </div>

  )
}
