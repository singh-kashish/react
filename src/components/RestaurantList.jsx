import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
let RestaurantList = ({ restaurants, geoPosition }) => {
  return (
    <div id="restaurantList">
      {restaurants ? (
        restaurants?.map((rest, index) => {
          return (
            <Link to={`/restaurants/${rest?.info?.id}`} key={index} state={geoPosition}>
              <Restaurant {...rest} geoPosition />
            </Link>
          );
        })
      ) : (
        <Shimmer />
      )}
    </div>
  );
};
export default RestaurantList;
