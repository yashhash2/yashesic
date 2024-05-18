import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Check what other users have to say aabout Fishwish food quality and services.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        I recently used Fishwish and I am absolutely delighted with the experience! The website is incredibly user-friendly and makes ordering fresh fish a breeze. The selection is impressive, offering a wide variety of high-quality fish that caters to all my culinary needs.

What truly stood out was the freshness of the fish.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Yash Kumar</h2>
      </div>
    </div>
  );
};

export default Testimonial;
