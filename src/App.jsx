import React, { lazy, useState, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantContext from "./hooks/context/RestaurantContext.js";
import { useSearch } from "./hooks/useSearch";
import Body from "./components/Body";
import Error from "./components/Error";
import ViewRestaurant from "./components/ViewRestaurant";
import Auth from "./components/Auth";
import Shimmer from "./components/Shimmer.jsx";
import UserContext from "./hooks/context/UserContext.js";

const Profile = lazy(() => import("./components/Profile.jsx"));
const Accordion = lazy(() => import("./components/Accordion.jsx"));
const App = () => {
  const [allRestaurants, setAllRestaurants] = useState();
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);
  const { searchedRestaurants, search, setSearch } =
    useSearch(filteredRestaurants);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({email:null,password:null});
  return (
      <UserContext.Provider value={{user,setUser,isLoggedIn,setIsLoggedIn}}>
        <RestaurantContext.Provider
          value={{ searchedRestaurants, search, setSearch }}
        >
          <Header
            search={search}
            setSearch={setSearch}
          />
          <Outlet
            context={[
              searchedRestaurants,
              setFilteredRestaurants,
            ]}
          />
        </RestaurantContext.Provider>
        <Footer />
      </UserContext.Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: "profile",
            element: (
              <Suspense fallback={<Shimmer />}>
                <Profile />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/accordion",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Accordion />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:id",
        element: <ViewRestaurant />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

export default App;
