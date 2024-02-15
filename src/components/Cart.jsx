import { useSelector, useDispatch } from "react-redux";
import ItemCard from "./ItemCard.jsx";
import { clearCart } from "../utils/slices/cartSlice.js";
const Cart = () => {
  let cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  let total = 0;
  cartItems.forEach((obj) => (total += (obj.item.price / 100) * obj.quantity));
  return (
    <div className="flex col justify-center align-center h-fit w-full">
      <div className="bg-red-50 rounded-lg shadow-2xl flex flex-col items-center justify-start p-2 w-2/3 m-4">
        <h1 className="font-bold text-3xl font-mono">Cart</h1>
        {cartItems.length > 0 && (
          <button
            className="w-1/2 bg-blue-400 rounded-full py-1 mb-1"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        )}
        <div className="w-full">
          {cartItems.map((ele) => (
            <ItemCard item={ele.item} className="w-full" key={ele.id} />
          ))}
          <h1 className="font-mono text-xl">To Pay: Rs. {total}</h1>
        </div>
      </div>
    </div>
  );
};
export default Cart;
