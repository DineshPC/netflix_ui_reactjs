import React from 'react';
import Intro from './Intro/Intro';
import "./MainSectionStyle.css"
import CardRoll from './CardRoll/CardRoll';

export default function MainSection() {
  return (
    <div className='MainContainer'>
      <Intro />
      <CardRoll name="Popular on Netflix"/>
      <CardRoll name="TV Comedies"/>
      <CardRoll name="Bingeworthy TV Dramas"/>
    </div>
  )
}
