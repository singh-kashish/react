let Restaurant = (restaurant) => {
  return (
    <div id="restaurant">
      <img alt="restaurantImage" src={restaurant.data.img} />
      <h3>{restaurant.data.name}</h3>
      <h5>{restaurant.data.cuisine.join(", ")}</h5>
      <h6>{restaurant.data.rating + " stars"}</h6>
    </div>
  );
};
export default Restaurant;