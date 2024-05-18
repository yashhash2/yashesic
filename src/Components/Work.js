import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick meals at comfort of your place by simply adding it to cart by tapping at add to cart button.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "You can also choose a schedule for daily items need. Extra discounts will be given for regular deliveries.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "90 minutes express deliveries at your doorstep.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Fresh fish is inspected thoroughly for quality indicators such as clear eyes, bright red gills, firm flesh, and a fresh, mild smell.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
