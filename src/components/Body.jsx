import React, { useState, useEffect } from "react";
import Header from "./Header";
import RestaurantList from "./RestaurantList";
import Footer from "./Footer";
import { useSearch } from "../hooks/useSearch.js";
import { apiUrl } from "../config.js";
import { useGeoCoordinates } from "../hooks/useGeoCoordinates.js";

let Body = () => {
  const [allRestaurants, setAllRestaurants] = useState();
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);
  const { searchedRestaurants, search, setSearch } =
    useSearch(filteredRestaurants);
  useEffect(() => {
    useGeoCoordinates()
      .then((result) =>
        getRestaurantsFromSwiggy(result.latitude, result.longitude)
      )
      .catch((err) => console.error(err));
  }, []);

  async function getRestaurantsFromSwiggy(userLat, userLong) {
    let apiResult = await fetch(`${apiUrl}${userLat}&lng=${userLong}`);
    let finalResult = await apiResult.json();
    setFilteredRestaurants(
      finalResult?.data?.success?.cards[1]?.gridWidget?.gridElements
        ?.infoWithStyle?.restaurants
    );
    return finalResult;
  }
  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <RestaurantList restaurants={searchedRestaurants} />
      <Footer />
    </div>
  );
};
export default Body;
