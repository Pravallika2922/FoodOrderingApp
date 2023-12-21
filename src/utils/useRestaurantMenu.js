import React, { useEffect, useState } from "react";
import { RES_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => fetchData(), []);
  const fetchData = async () => {
    const result = await fetch(RES_URL + resId);
    const json = await result.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
