import React from "react";
import { LOGO_URL } from "../utils/constants";
import { AiOutlineStar } from "react-icons/ai";

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
        <span>{avgRating}</span>
        <span
          className="icons"
          style={{
            position: "relative",
            top: "2px",
            marginRight: "3px",
          }}
        >
          <AiOutlineStar />
        </span>
      </div>
      <div className="res-details2">
        <p>{cuisines.join(", ")}</p>
        <p>{sla.deliveryTime} MINS</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
