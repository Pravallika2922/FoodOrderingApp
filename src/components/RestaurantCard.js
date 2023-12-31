import React from "react";
import { LOGO_URL } from "../utils/constants";
import { AiOutlineStar } from "react-icons/ai";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div
      className="p-4 m-4 w-[250px] hover:bg-pink-400 hover:dark:bg-black dark:text-white"
      data-testid="resCard"
    >
      <img
        src={LOGO_URL + cloudinaryImageId}
        alt="res-logo"
        className="object-cover h-48 w-96 rounded-md"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <span className="inline">
        {avgRating}
        <AiOutlineStar className="inline" />
      </span>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.deliveryTime} MINS</h4>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white m-2 p-2 dark:bg-pink-500">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
