import ItemCard from "./ItemCard";

let ViewRestaurantCard = (restaurant) => {
  let restaurantList = restaurant.restaurant;

  return (
    <div>
      <h2>{`${restaurantList?.title===undefined ? '' :restaurantList?.title}    ${
        restaurantList?.itemCards?.length === undefined
          ? ""
          : `(${restaurantList?.itemCards?.length})`
      }`}</h2>
      <div className="foodMenu">
        {restaurantList?.itemCards?.map((list, index) => (
          <ItemCard item={list?.card?.info} key={index} />
        ))}
      </div>
    </div>
  );
};
export default ViewRestaurantCard;