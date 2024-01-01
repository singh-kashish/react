import Restaurant from './Restaurant';

let RestaurantList = ({ restaurants }) => {
  return (
    <div id="restaurantList">
      {restaurants.map((rest, index) => {
        return <Restaurant {...rest} key={index} />;
      })}
    </div>
  );
};
export default RestaurantList;
