import React from "react";
import { OFFER_IMG_URL } from "../utils/constants";

const OfferCard = (props) => {
  return (
    <div>
      {props.index === props.current && (
        <img
          src={OFFER_IMG_URL + props.offer.imageId}
          className="w-25 h-auto"
        />
      )}
    </div>
  );
};

export default OfferCard;
