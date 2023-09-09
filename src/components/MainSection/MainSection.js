import React from 'react';
import Intro from './Intro/Intro';
import "./MainSectionStyle.css"
import CardRoll from './CardRoll/CardRoll';

import {genre1 , genre2, genre3, genre4} from '../../common/cardList1';

export default function MainSection() {
  return (
    <div className='MainContainer'>
      <Intro />
      <CardRoll cardItems={genre1}/>
      <CardRoll cardItems={genre2}/>
      <CardRoll cardItems={genre3}/>
      <CardRoll cardItems={genre4}/>
      
      {/* <CardRoll name="TV Comedies" cardId="cardID2"/>
      <CardRoll name="Bingeworthy TV Dramas" cardId="cardID3"/>
      <CardRoll name="Bingeworthy TV Dramas" cardId="cardID4"/> */}
    </div>
  )
}
