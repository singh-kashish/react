import Stars from "./Stars";
import {mediaUrl} from "../config";

let Restaurant = (restaurant) => {
  return (
    <div
      id="restaurant"
      className="relative rounded-lg m-2 pt-1 px-1 w-56 hover:scale-125 hover:z-40 bg-orange-50 duration-500 flex flex-col justify-start"
    >
      <img
        alt="restaurantImage"
        src={
          restaurant.info.img
            ? restaurant.info.img
            : `${mediaUrl}${restaurant.info.cloudinaryImageId}`
        }
        className="w-full h-64"
      />
      <h3 className="font-semibold m-1">{restaurant.info.name}</h3>
      <h5 className="font-normal m-1 leading-4">{restaurant.info.cuisines.join(", ")}</h5>
      <h6 className="m-1 font-semibold flex items-center justify-between w-9">
        {restaurant.info.avgRating}
        <Stars className=""/>
      </h6>
    </div>
  );
};
export default Restaurant;
