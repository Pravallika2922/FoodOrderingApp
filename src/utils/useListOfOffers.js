import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const useListOfOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, []);
  const fetchOffers = async () => {
    const result = await fetch(API_URL);
    const json = await result.json();
    setOffers(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  return offers;
};

export default useListOfOffers;
