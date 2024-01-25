import ItemCard from "./ItemCard";

let ViewRestaurantCard = (restaurant) => {
  let restaurantList = restaurant.restaurant;
  console.log(restaurantList);
  return (
    <div>
      <h2 className="font-bold">{`${
        restaurantList?.title === undefined ? "" : restaurantList?.title
      }    ${
        restaurantList?.itemCards?.length === undefined
          ? ""
          : `(${restaurantList?.itemCards?.length})`
      }`}</h2>
      <div className="flex flex-col mb-2.5">
        {restaurantList?.itemCards?.map((list, index) => (
          <ItemCard item={list?.card?.info} key={list?.card?.info?.id} />
        ))}
      </div>
    </div>
  );
};
export default ViewRestaurantCard;
