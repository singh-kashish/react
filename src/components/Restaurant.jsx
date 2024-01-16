import Stars from "./Stars";
let Restaurant = (restaurant) => {
  return (
    <div id="restaurant">
      <img
        alt="restaurantImage"
        src={
          restaurant.info.img
            ? restaurant.info.img
            : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`
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
