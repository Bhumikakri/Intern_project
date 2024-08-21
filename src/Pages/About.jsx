import React from 'react';
import "./About.css";
import p from "../assets/pharma.jpeg";
// import p1 from "../assets/pharma2.webp";

const About = () => {
  return (
    <div className='body'>
      <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="allText bottomText">
          <p className="text-blk headingText">
            About
          </p>
          <p className="text-blk subHeadingText">
          Evaluxe Pharmaceuticals
          </p>
          <p className="text-blk description">
          Evaluxe Pharmaceuticals is on a mission to make high-quality healthcare accessible to everyone. We're a pharmaceutical company committed to developing innovative solutions for common health problems. From managing acid reflux to relieving pain and boosting immunity, we're dedicated to improving people's lives through our effective and affordable medications.
          </p>
          <a>
            <button className="explore">
              View More
            </button>
          </a>
        </div>
        <div className="videoContainer">
          <img  className="mainImage" src={p}>
          </img>
          <img className="dotsImg image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About