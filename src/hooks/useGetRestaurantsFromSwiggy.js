import { useEffect, useState } from "react";
import { apiUrl } from "../config";

const useGetRestaurantsFromSwiggy = ({
  userLat,
  userLong,
  setFilteredRestaurants,
}) => {
  const [error, setError] = useState(false);
  const [restaurants, setRestaurants] = useState('');
  async function getRestaurantsFromSwiggy(
    userLat,
    userLong,
    setFilteredRestaurants
  ) {
    try {
      let apiResult = await fetch(`${apiUrl}${userLat}&lng=${userLong}`);
      let finalResult = await apiResult.json();
      setFilteredRestaurants(
        finalResult?.data?.success?.cards[1]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
      setRestaurants(
        finalResult?.data?.success?.cards[1]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  }
  useEffect(() => {
    if(typeof(userLat) !== 'undefined' && typeof userLong !== 'undefined')getRestaurantsFromSwiggy(userLat,userLong,setFilteredRestaurants);
  }, [userLat]);
  return {restaurants, error};
};
export default useGetRestaurantsFromSwiggy;
