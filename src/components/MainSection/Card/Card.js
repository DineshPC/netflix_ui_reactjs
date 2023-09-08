import React from 'react';
import "./CardStyle.css"

export default function Card(props) {
  return (
    <div className='cardContainer'>
      <div>
        <img src={props.img} alt="" style={{'width' :'300px'}}/>
      </div>
      <div className='movieName'>
        <p>{props.name}</p>
      </div>
    </div>
  )
}
