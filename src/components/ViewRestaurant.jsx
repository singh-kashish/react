import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { mediaUrl } from "../config";
import Stars from "./Stars";
import { fetchRestaurantDetails } from "../modules/fetchRestaurantDetails";
import Coupon from "./Coupon.jsx";
import ViewRestaurantCard from "./ViewRestaurantCard.jsx";
import RestaurantShimmer from "./RestaurantShimmer.jsx";
import ApiError from "./ApiError.jsx";

let ViewRestaurant = () => {
  const { id } = useParams();
  let { latitude, longitude } = useLocation().state;
  let [restaurantData, setRestaurantData] = useState(null);
  const [menu, setMenu] = useState([]);
  const [apiErrorData, setAPIErrorData] = useState(null);
  useEffect(() => {
    fetchRestaurantDetails(latitude, longitude, id)
      .then((res) => {
        console.log('res>',res);
        let { info } =
          res?.data?.cards?.length <= 3
            ? res?.data?.cards[0]?.card?.card
            : res?.data?.cards[2]?.card?.card || {};
        console.log("info>", info);
        if (res.length > 3)
          setMenu(
            res?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          );
        else
          setMenu(
            res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          );
        setRestaurantData(info);
        return info;
      })
      .catch((err) => {
        console.log("err");
        let errMsg = new Error(err.message);
        setAPIErrorData(err.message);
        console.error(err.message);
        throw errMsg;
      });
  }, []);
  console.log(menu);
  if (restaurantData === null && apiErrorData === null)
    return <RestaurantShimmer />;
  else if (apiErrorData !== null && restaurantData === null)
    return <ApiError err={apiErrorData} />;
  else
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
              <ViewRestaurantCard key={index} restaurant={e.card?.card} />
            ))}
            <div></div>
          </div>
        </div>
      </div>
    );
};
export default ViewRestaurant;
