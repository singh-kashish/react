import { mediaUrl } from "../config";
import Stars from "./Stars";
import Coupon from "./Coupon.jsx";
import ViewRestaurantCard from "./ViewRestaurantCard.jsx";
import RestaurantShimmer from "./RestaurantShimmer.jsx";
import ApiError from "./ApiError.jsx";
import useGetRestaurant from "../hooks/useGetResaturant.js";

let ViewRestaurant = () => {
  let {restaurantData,apiErrorData,menu}=useGetRestaurant();
  if (restaurantData === null && apiErrorData === null)
    return <RestaurantShimmer />;
  else if (apiErrorData !== null && restaurantData === null)
    return <ApiError err={apiErrorData} />;
  else {
    console.log(menu);
    return (
      <div className="restaurantView">
        <div className="restaurantHeader">
          <div>
            <img
              src={mediaUrl + restaurantData?.cloudinaryImageId}
              alt="restaurantImage"
            />
          </div>
          <div id="restaurantDetails">
            <div id="restaurantName">
              <div>
                <h2>{restaurantData?.name}</h2>
                <p>{restaurantData?.cuisines?.join(", ")}</p>
                <p>{`${restaurantData?.areaName} , ${restaurantData?.city}`}</p>
                <p>{restaurantData?.costForTwoMessage}</p>
                <p style={{ fontWeight: "600" }}>
                  {restaurantData?.expectationNotifiers[0]?.text}
                </p>
              </div>
              <div id="ratings">
                <h4>
                  {restaurantData?.avgRating}
                  <Stars />
                </h4>
                <h5>{restaurantData?.totalRatings / 1000 + "K+ ratings"}</h5>
              </div>
            </div>
            <div id="coupons">
              {restaurantData?.aggregatedDiscountInfoV2?.shortDescriptionList?.map(
                (e, index) => (
                  <Coupon text={e} key={index} />
                )
              )}
            </div>
            {menu?.map((e, index) => (
              <ViewRestaurantCard
                key={e.card?.card?.title}
                restaurant={e.card?.card}
              />
            ))}
            <div></div>
          </div>
        </div>
      </div>
    );
  }
    
};
export default ViewRestaurant;
