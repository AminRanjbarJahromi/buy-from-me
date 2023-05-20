import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              {" "}
              Discover
              <br />
              Most Suitable
              <br /> Property
            </h1>
          </div>

          <div className="flxColStart hero-description">
            <span className="secondaryText"> This is fantastic opportunities for our property</span>
            <br />
            <span span className="secondaryText"> Just trust US</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button"> Search </button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={5800} end={6000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Premium Product </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span span className="secondaryText"> Coustomer Satisfaction</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={30} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Award winning</span>
            </div>
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
  );
};

export default Hero;
