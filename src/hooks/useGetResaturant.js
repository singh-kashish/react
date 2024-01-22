import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchRestaurantDetails } from "../modules/fetchRestaurantDetails";
const useGetRestaurant = () => {
  const { id } = useParams();
  const { latitude, longitude } = useLocation().state;
  let [restaurantData, setRestaurantData] = useState(null);
  const [menu, setMenu] = useState([]);
  const [apiErrorData, setAPIErrorData] = useState(null);
  useEffect(() => {
    fetchRestaurantDetails(latitude, longitude, id)
      .then((res) => {
        let { info } =
          res?.data?.cards?.length <= 3
            ? res?.data?.cards[0]?.card?.card
            : res?.data?.cards[2]?.card?.card || {};
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
        let errMsg = new Error(err.message);
        setAPIErrorData(err.message);
        console.error(err.message);
        throw errMsg;
      });
  }, []);
  return {restaurantData,apiErrorData,menu};
};
export default useGetRestaurant;
