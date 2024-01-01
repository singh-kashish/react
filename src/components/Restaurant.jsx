let Restaurant = (restaurant) => {
  return (
    <div id="restaurant">
      <img alt="restaurantImage" src={restaurant.img} />
      <h3>{restaurant.name}</h3>
      <h5>{restaurant.cuisine.join(", ")}</h5>
      <h6>{restaurant.rating + " stars"}</h6>
    </div>
  );
};
export default Restaurant;