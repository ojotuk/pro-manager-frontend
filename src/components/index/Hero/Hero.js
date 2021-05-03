import React from 'react'
import Carousel from './Carousel'
import Button from './../../Button/Button'
import './hero.css'
export default function Hero() {

    return (
        <div className='container'>
            <div className='hero-wrapper'>
            <Descriptions />
            <div className='carousel-wrapper'>
                <Carousel />
            </div>
            </div>
        </div>
    )
}

const Descriptions = ()=>{
    return(
        <div className='hero-description'>
            <h1>Flexible solutions for small businesses.</h1>
            <p>Manage your most important assets, people. Streamline and automate processes, save time, work efficiently, keep employees happy.</p>
            <div className='demo-request'>
                <input placeholder='Enter your email address'/><Button text="Request Demo" link="/"/>
            </div>
        </div>
    )
} 
