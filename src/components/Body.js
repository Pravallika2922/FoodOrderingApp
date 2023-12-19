import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const searchList = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="upper-btns">
        <div className="res-toprated">
          <button
            className="btn-toprated"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
            value={inputSearch}
          />
          <button
            className="btn-search"
            onClick={() => {
              searchList();
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
