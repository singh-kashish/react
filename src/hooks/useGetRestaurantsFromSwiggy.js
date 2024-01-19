import { apiUrl } from "../config";

export async function useGetRestaurantsFromSwiggy(
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
    return finalResult;
  } catch (error) {
    const errorMsg = new Error(error?.message);
    throw errorMsg;
  }
}
