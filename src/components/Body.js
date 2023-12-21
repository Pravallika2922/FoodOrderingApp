import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const { listOfRestaurants, filteredRestaurants } = useRestaurants();
  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const searchList = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  if (status === false) {
    return <h1>Looks like you are offline. Please check internet status!!!</h1>;
  }
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
              setFilteredRestaurants(filteredRestaurants);
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
          {inputSearch && (
            <button
              className="btn-search"
              onClick={() => {
                searchList();
              }}
            >
              Search
            </button>
          )}
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((res) => {
          return (
            <Link
              to={"/restaurants/" + res.info.id}
              key={res.info.id}
              className="link"
            >
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
