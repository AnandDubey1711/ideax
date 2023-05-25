import React from 'react'
import './Hero.css';
import HeroImage from '../../assets/developer-working-on-code-free-vector-removebg.png';

const Hero = () => {
  return (
    <section id="hero">
      <div className="header">
    <h1 className="heading">
      Algo.IO
      <p className="title-logo">
      Don't learn Algorithms instead visualize them
    </p>
    </h1>
    
    <img className='hero-image' src={HeroImage} alt="HeroImage"/>
    
   </div>
    </section>
   
  )
}

export default Hero