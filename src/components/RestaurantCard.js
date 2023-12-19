import React from "react";
import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img
          src={LOGO_URL + cloudinaryImageId}
          alt="res-logo"
          className="res-img"
        />
      </div>
      <div className="res-details1">
        <h3>{name}</h3>
        <p>{avgRating} </p>
      </div>
      <div className="res-details2">
        <p>{cuisines.join(", ")}</p>
        <p>{sla.deliveryTime}mins</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
