import { useEffect, useState } from "react";
import { desktopApiUrl } from "../config";

const useGetRestaurantsFromSwiggy = ({
  userLat,
  userLong,
  setFilteredRestaurants,
}) => {
  const [error, setError] = useState(false);
  const [restaurants, setRestaurants] = useState("");
  async function getRestaurantsFromSwiggy(
    userLat,
    userLong,
    setFilteredRestaurants
  ) {
    try {
      let apiResult = await fetch(
        `${desktopApiUrl}${userLat}&lng=${userLong}&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
      );
      let finalResult = await apiResult.json();
      if (finalResult?.data?.cards.length > 10) {
        setFilteredRestaurants(
          finalResult?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestaurants(
          finalResult?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } else {
        // Handling different cases as per swiggy's api as response depends on the user-agent trying to access the API.
        setFilteredRestaurants(
          finalResult?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestaurants(
          finalResult?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    } catch (error) {
      setError(error.message);
      console.error(error.message);
      console.log(error);
    }
  }
  useEffect(() => {
    if (typeof userLat !== "undefined" && typeof userLong !== "undefined")
      getRestaurantsFromSwiggy(userLat, userLong, setFilteredRestaurants);
  }, [userLat, userLong]);
  return { restaurants, error };
};
export default useGetRestaurantsFromSwiggy;
