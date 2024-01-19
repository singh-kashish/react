import Stars from "./Stars";
import {mediaUrl} from "../config";

let Restaurant = (restaurant) => {
  return (
    <div id="restaurant">
      <img
        alt="restaurantImage"
        src={
          restaurant.info.img
            ? restaurant.info.img
            : `${mediaUrl}${restaurant.info.cloudinaryImageId}`
        }
      />
      <h3>{restaurant.info.name}</h3>
      <h5>{restaurant.info.cuisines.join(", ")}</h5>
      <h6>
        {restaurant.info.avgRating}
        <Stars />
      </h6>
    </div>
  );
};
export default Restaurant;
