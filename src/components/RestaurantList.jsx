import Restaurant from "./Restaurant";
import { ShimmerPostList } from "react-shimmer-effects";

let RestaurantList = ({ restaurants }) => {
  return (
    <div id="restaurantList">
      {restaurants ? (
        restaurants.map((rest, index) => {
          return <Restaurant {...rest} key={index} />;
        })
      ) : (
        <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={3} gap={30} />
      )}
    </div>
  );
};
export default RestaurantList;
