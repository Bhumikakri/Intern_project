import React from 'react';
import "./Trustedby.css";
import trust from "../assets/trusted.jpeg";

const Trusted = () => {
  return (
    <div className='body'>
    <div className="responsive-container-block bigContainer">
    <div className="responsive-container-block Container bottomContainer">
      <div className="allText bottomText">
        <p className="text-blk headingText">
          Trusted By
        </p>
        <p className="text-blk subHeadingText">
        Evaluxe Pharmaceuticals
        </p>
        <p className="text-blk description">
        Trusted by top hospitals, clinics, and healthcare providers globally for delivering reliable, high-quality pharmaceutical products.
        Valued by major distributors and supply chains for consistency, availability, and compliance with international standards.
        Endorsed by physicians, specialists, and pharmacists who recommend our products for their efficacy and patient safety.
        Recognized by international regulatory agencies such as the FDA, EMA, and WHO for adhering to the strictest standards of quality and safety.
        Trusted by millions of patients worldwide for improving health outcomes and enhancing quality of life with safe and effective treatments.
        </p>
        <a>
          <button className="explore">
            View More
          </button>
        </a>
      </div>
      <div className="videoContainer">
        <img className="dotsImg image-block h-full w-full" src={trust}/>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Trusted