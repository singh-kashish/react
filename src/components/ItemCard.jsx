import Stars from "./Stars";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import { mediaUrl } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItemFromCart } from "../utils/slices/cartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  let cartItems = useSelector((store) => store.cart.cartItems);
  let doesCartItemExist = cartItems.find((obj) => obj.item.id === item.id);
  let quantity = 0;
  if (doesCartItemExist) quantity = doesCartItemExist.quantity;
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
        <p className="font-mono font-extralight text-wrap">
          {item?.description}
        </p>
      </div>
      <div className="h-full flex flex-col items-center">
        <img
          className="h-3/4 rounded-md relative"
          src={`${mediaUrl}${item.imageId}`}
        />
        {quantity !== 0 ? (
          <div className="bg-orange-50 font-bold text-green-200 flex items-center border border-slate-400">
            <p className="text-gray-400 px-2 py-1" onClick={()=>dispatch(removeItemFromCart(item))}>-</p>
            {quantity}
            <p className="text-green-400 px-2 py-1" onClick={()=>dispatch(addToCart(item))}>+</p>
          </div>
        ) : (
          <button
            className="z-10 rounded-lg px-2 py-1 bg-green-600 hover:bg-green-400 text-amber-400"
            onClick={() => dispatch(addToCart(item))}
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
};
export default ItemCard;
