import { nameData } from "../config";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/foodLogo.jpg";
import useOnline from "../hooks/useOnline";
import { useContext } from "react";
import RestaurantContext from "../hooks/context/RestaurantContext";
import UserContext from "../hooks/context/UserContext";
import { useSelector } from "react-redux";
import CartLogo from "../assets/images/shopping_cart.png";

const Header = () => {
  let networkStatus = useOnline();
  let { search, setSearch, searchedResults } = useContext(RestaurantContext);
  let navigate = useNavigate();
  let { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(UserContext);
  // subscribe to cart slice of redux-store
  let cart = useSelector((store) => store.cart.cartItems);
  return (
    <div className="flex flex-row justify-between items-center bg-orange-100 z-30 h-14 px-1 border-b-[1px] border-b-slate-400 sticky top-[0px]">
      <Link to="/">
        <div className="ml-2.5 flex items-center justify-start">
          <img
            src={Logo}
            alt="headerLogo"
            className="w-10"
            data-testid="logo"
          />
          <p>{nameData.data.name}</p>
        </div>
      </Link>
      <form
        className="flex lg:grow flex-row align-center justify-center lg:min-w-[450px] shrink-0 xl:basis-1/2"
        onSubmit={(e) => {
          e.preventDefault();
          console.warn(e);
          const formdata = new FormData(e.target);
          const input = formdata.get("search");
          setSearch(input);
          navigate("./");
        }}
        data-testid="search"
      >
        <input
          type="text"
          name="search"
          className="w-5/6 leading-7 border-0 rounded-xl mr-1 pl-4"
          placeholder="Search text here"
        />
        <button
          className="rounded-md border-gray-400 border-[1px] cursor-pointer hover:border-2 hover:bg-orange-200 px-2 hover:scale-[1.01] hover:font-semibold leading-7"
          type="submit"
        >
          Search
        </button>
      </form>
      <p data-testid="isOnline">{networkStatus ? "🟢" : "🔴"}</p>
      <div id="links">
        <ul className="flex justify-between list-none *:p-2.5 *:border-r-[1px] *:border-dashed *:border-gray-400" data-testid="linksAtHeader">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/accordion">Accordion</Link>
          </li>

          <Link to="/cart">
            <li className="flex items-center ">
            <span className="rounded-full bg-orange-200 px-2 mr-1" data-testid="cartLength">
              {cart?.length > 0 ? cart?.length : 0
              }
              </span>

              <img src={CartLogo} alt="cartLogo" className="size-5" />
              <p>Cart</p>
            </li>
          </Link>
        </ul>
      </div>
      <Link to="/auth" state={{ s: isLoggedIn }}>
        <button
          id="loginButton"
          onClick={(e) => {
            if (isLoggedIn) {
              setIsLoggedIn(false);
              setUser({});
            }
          }}
          className="border-gray-400 my-2.5 border-solid border-[1px] rounded-lg px-2 py-1 ml-1"
        >
          {isLoggedIn ? "Log out" : "Login"}
        </button>
      </Link>
    </div>
  );
};

export default Header;
