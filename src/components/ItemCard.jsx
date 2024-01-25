import Stars from "./Stars";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import { mediaUrl } from "../config";
let ItemCard = ({ item }) => {
  return (
    <div
      id="item-card"
      className="flex justify-between items-center rounded-md h-56 mb-2.5 p-2 cursor-pointer hover:bg-slate-200 shadow-md"
    >
      <div>
        <h3 className="flex justify-start items-center font-serif">
          <span className="mr-2.5 font-medium leading-4">{item?.name}</span>
          {item?.itemAttribute?.vegClassifier === "NONVEG" ? (
            <NonVeg />
          ) : (
            <Veg />
          )}
        </h3>
        <h5 className="font-serif font-light">{"Rs. " + item?.price / 100}</h5>
        <p className="flex justify-start items-center">
          <div style={{ fill: "green" }} className="flex items-center mr-2">
            {item?.ratings?.aggregatedRating?.rating}
            <Stars />
          </div>
          <div>({item?.ratings?.aggregatedRating?.ratingCountV2})</div>
        </p>
        <p className="font-mono font-extralight">{item?.description}</p>
      </div>
      <div className="h-full">
        <img
          className="h-3/4 rounded-md "
          src={`${mediaUrl}${item.imageId}`}
        />
      </div>
    </div>
  );
};
export default ItemCard;
