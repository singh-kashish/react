import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
let RestaurantList = ({ restaurants, geoPosition }) => {
  return (
    <div
      id="restaurantList"
      className="pb-10 flex flex-wrap justify-center pt-2.5 bg-orange-100 z-20"
      data-testid="restaurantList"
    >
      {restaurants ? (
        restaurants?.map((rest, index) => {
          return (
            <Link
              to={`/restaurants/${rest?.info?.id}`}
              key={rest?.info?.id}
              state={geoPosition}
            >
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
