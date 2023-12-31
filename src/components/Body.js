import React from "react";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfOffers from "../utils/useListOfOffers";
import OfferCard from "../components/OfferCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [current, setCurrent] = useState(0);
  const offers = useListOfOffers();
  const length = offers.length;
  const status = useOnlineStatus();
  const RestaurantCardOpenLabel = withOpenLabel(RestaurantCard);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API_URL);
      const json = await data.json();
      console.log(json);
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    fetchData();
  }, []);

  const handlePrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
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
      <div className="flex justify-between px-3">
        <div className="m-4 p-4">
          <button
            className="px-2 cursor-pointer m-4 bg-pink-400 text-lg text-slate-950 rounded-md dark:bg-black dark:text-white"
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
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            data-testid="searchInput"
            placeholder="Search"
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
            value={inputSearch}
          />

          <button
            className=" px-2 cursor-pointer m-4 bg-pink-400 text-lg text-slate-950 rounded-md dark:bg-black dark:text-white"
            onClick={() => {
              searchList();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between">
          <h2 className="text-lg">Best Offers for You</h2>
          <div>
            <button className="p-4" onClick={handlePrevious}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="p-4" onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div>
          {offers.map((offer, index) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              index={index}
              current={current}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((res) => {
          return (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              {res.info.isOpen ? (
                <RestaurantCardOpenLabel resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
