import React from 'react';
import './Card.css';
import img from '../images/katie.jpg';

export default function Card() {
  return (
    <div className='card--wrapper'> 
      <img className='card--image' src={img}/>
      <div className='card--text'>
        <div className='card--rating'>
          <span style={{color:'red',fontSize:'14px'}} class="iconify" data-icon="ls:star"></span>
          <span>5.0</span>
          <span className='gray'>(6)</span>
          <span className='gray'>•</span>
          <span className='gray'>USA</span>
        </div>
        <span className='card--title'>Life lessons with Katie Zaferes</span>
        <span className='card--cost'><span className='bold'>From $136 /</span> person</span>
      </div>
    </div>
  )
}
