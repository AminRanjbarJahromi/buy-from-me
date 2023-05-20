import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from'react-icons/hi'

const Hero = () => {
  return (
    <section className = "hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">

            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1> Discover<br/>
                     Most Suitable<br/> Property
                    </h1>
                </div>

            <div className="flxColStart hero-description">
                <span> This is fantastic opportunities for our property</span>
                <br />
                <span> Just trust US</span>
            </div>
            <div className="flexCenter search-bar">
                <HiLocationMarker color="var(--blue)" size={25}/>
                <input type="text" />
                <button className="button"> Search </button>
            </div>
            </div>

            {/* righ side */}
            <div className=" flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero