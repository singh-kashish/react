import { useEffect, useState } from "react";
import useGetLocation from "./useGetLocation";
import useGetRestaurantsFromSwiggy from "./useGetRestaurantsFromSwiggy";

const useGetAllRestaurants = (setFilteredRestaurants) => {
  const [location, locationError] = useGetLocation();
  const [toReturnObject, setToReturnObject] = useState({
    location,
    locationError,
  });
  let objectToPass = {
    userLat: location.latitude,
    userLong: location.longitude,
    setFilteredRestaurants,
  };
  let restaurants = useGetRestaurantsFromSwiggy(objectToPass);
  useEffect(() => {
    if (locationError === "No location error") {
      setToReturnObject({ restaurants, locationError, location });
    } else {
      setToReturnObject({ restaurants, locationError, location });
    }
  }, [location]);

  return toReturnObject;
};
export default useGetAllRestaurants;
