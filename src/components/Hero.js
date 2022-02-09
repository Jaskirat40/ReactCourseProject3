import React from 'react';
import './Hero.css';
import banner from '../images/airbnb-virtual1.png';

export default function Hero(){
    return(
        <div className='hero--wrapper'>
            <img className='hero--banner' src={banner}/>
            <div className='hero--content'>
                <span className='hero--text1'>
                    Online Experiences
                </span>
                <span className='hero--text2'>
                    Join unique interactive activities led by one-of-a-kind hosts-all without leaving home
                </span>
            </div>
        </div>
    );
} 
