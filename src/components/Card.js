import React from 'react';
import './Card.css';

export default function Card(props) {
  console.log(props.item.id);
  return (
    <div className='card--wrapper'> 
      {props.item.openSpots===0 ? <div className='card--badge'>SOLD OUT</div> : props.item.location==='Online' ? <div className='card--badge'>Online</div> : null}
      <img className='card--image' src={require(`../images/katie.jpg`)}/>
      <div className='card--text'>
        <div className='card--rating'>
          <span style={{color:'red',fontSize:'14px'}} class="iconify" data-icon="ls:star"></span>
          <span>{props.item.stats.rating}</span>
          <span className='gray'>({props.item.stats.reviewCount})</span>
          <span className='gray'>•</span>
          <span className='gray'>{props.item.location}</span>
        </div>
        <span className='card--title'>{props.item.title}</span>
        <span className='card--cost'><span className='bold'>From ${props.item.price} /</span> person</span>
      </div>
    </div>
  )
}
