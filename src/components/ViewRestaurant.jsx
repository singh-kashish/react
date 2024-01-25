import { mediaUrl } from "../config";
import Stars from "./Stars";
import Coupon from "./Coupon.jsx";
import ViewRestaurantCard from "./ViewRestaurantCard.jsx";
import RestaurantShimmer from "./RestaurantShimmer.jsx";
import ApiError from "./ApiError.jsx";
import useGetRestaurant from "../hooks/useGetResaturant.js";

let ViewRestaurant = () => {
  let { restaurantData, apiErrorData, menu } = useGetRestaurant();
  if (restaurantData === null && apiErrorData === null)
    return <RestaurantShimmer />;
  else if (apiErrorData !== null && restaurantData === null)
    return <ApiError err={apiErrorData} />;
  else {
    console.log(menu);
    return (
      <div className="flex flex-col justify-start items-center w-full bg-gray-100 p-2">
        <div className="flex justify-center items-start w-full">
          <div>
            <img
              src={mediaUrl + restaurantData?.cloudinaryImageId}
              alt="restaurantImage"
            />
          </div>
          <div className="w-full ml-3">
            <div className="w-full flex justify-between border-b-[1px] border-dotted border-red-100 pb-2">
              <div>
                <h2>{restaurantData?.name}</h2>
                <p>{restaurantData?.cuisines?.join(", ")}</p>
                <p>{`${restaurantData?.areaName} , ${restaurantData?.city}`}</p>
                <p>{restaurantData?.costForTwoMessage}</p>
                <p style={{ fontWeight: "600" }}>
                  {restaurantData?.expectationNotifiers[0]?.text}
                </p>
              </div>
              <div
                id="ratings"
                className="flex flex-col items-center justify-center z-10 rounded-lg border-[1px] border-[#e9e9eb] shadow-md p-2 max-w-28"
              >
                <h4 className="flex flex-row w-10/12 justify-center items-center border-b-[1px] border-solid border-gray-400 font-semibold">
                  {restaurantData?.avgRating}
                  <Stars />
                </h4>
                <h5>{restaurantData?.totalRatings / 1000 + "K+ ratings"}</h5>
              </div>
            </div>
            <div id="coupons" className="flex justify-start">
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
