import React, { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import { useGeoCoordinates } from "../hooks/useGeoCoordinates.js";
import { useGetRestaurantsFromSwiggy } from "../hooks/useGetRestaurantsFromSwiggy.js";
import { useOutletContext } from "react-router-dom";
import ApiError from "./ApiError.jsx";

let Body = () => {
  const [searchedRestaurants, setFilteredRestaurants] = useOutletContext();
  const [geoPosition, setGeoPosition] = useState({});
  const [apiErrorBool, setApiErrorBool] = useState(false);
  const [apiErrorMsg, setApiErrorMsg] = useState("");
  useEffect(() => {
    useGeoCoordinates()
      .then((result) => {
        useGetRestaurantsFromSwiggy(
          result.latitude,
          result.longitude,
          setFilteredRestaurants
        )
        .then((res) => {
          setApiErrorBool(false);
        })
        .catch((err) => {
          setApiErrorBool(true);
          setApiErrorMsg(err?.message);
          throw(err?.message);
        });
        setGeoPosition(result);
      })
      .catch((err) => {
        setApiErrorBool(true);
        setApiErrorMsg(err.message);
        console.error(err.message);
      });
  }, []);

  return apiErrorBool === false ? (
    <RestaurantList
      restaurants={searchedRestaurants}
      geoPosition={geoPosition}
    />
  ) : (
    <ApiError msg={apiErrorMsg} />
  );
};
export default Body;
