import React from "react";
import "./Hero.css";
import handIcon from "../../assets/hand_icon.png";
import arrowIcon from "../../assets/arrow.png";
import heroImg from "../../assets/hero_image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h2 className="hero__subtitle">New Arrivals Only</h2>

          <div className="hero__headline">
            <div className="hero__hand">
              <p>New</p>
              <img src={handIcon} alt="Hand Icon" />
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
          </div>

          <button className="hero__cta">
            <span>Latest Collection</span>
            <img src={arrowIcon} alt="Arrow Icon" />
          </button>
        </div>

        <div className="hero__image">
          <img src={heroImg} alt="Hero Banner" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
