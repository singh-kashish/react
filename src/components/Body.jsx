import React from "react";
import RestaurantList from "./RestaurantList";
import { useOutletContext } from "react-router-dom";
import ApiError from "./ApiError.jsx";
import useGetAllRestaurants from "../hooks/useGetAllRestaurants.js";

let Body = () => {
  const [searchedRestaurants, setFilteredRestaurants] = useOutletContext();
  const ans = useGetAllRestaurants(setFilteredRestaurants);
  const { latitude, longitude } = ans.location;
  if (ans.locationError !== "No location error") {
    return <h1>Please allow us to read your location.</h1>;
  }
  return ans.restaurants.error === false ? (
    <RestaurantList
      restaurants={searchedRestaurants}
      geoPosition={{ latitude, longitude }}
    />
  ) : (
    <ApiError msg={ans.error} />
  );
};
export default Body;
