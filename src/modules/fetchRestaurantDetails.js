import { fetchRestaurantUrl } from "../config";

export async function fetchRestaurantDetails(latitude, longitude, id) {
  try {
    let stream = await fetch(
      `${fetchRestaurantUrl}${latitude}&lng=${longitude}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    let jsonData = await stream.json();
    return jsonData;
  } catch (error) {
    console.log("error", error);
    let err = new Error(err.message);
    throw err;
  }
}
