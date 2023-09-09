import React from 'react';
import Intro from './Intro/Intro';
import "./MainSectionStyle.css"
import CardRoll from './CardRoll/CardRoll';

export default function MainSection() {
  return (
    <div className='MainContainer'>
      <Intro />
      <CardRoll name="Popular on Netflix" cardId="cardID1"/>
      <CardRoll name="TV Comedies" cardId="cardID2"/>
      <CardRoll name="Bingeworthy TV Dramas" cardId="cardID3"/>
      <CardRoll name="Bingeworthy TV Dramas" cardId="cardID4"/>
    </div>
  )
}
