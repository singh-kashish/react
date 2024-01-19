import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import { useSearch } from "./hooks/useSearch";
import Body from "./components/Body";
import Error from "./components/Error";
import ViewRestaurant from "./components/ViewRestaurant";
import Auth from "./components/Auth";
import Profile from './components/Profile.jsx';

const App = () => {
  const [allRestaurants, setAllRestaurants] = useState();
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);
  const { searchedRestaurants, search, setSearch } =
    useSearch(filteredRestaurants);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Outlet context={[searchedRestaurants, setFilteredRestaurants, isLoggedIn, setIsLoggedIn]} />
      <Footer />
    </>
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
            element: <Profile />,
          },
        ],
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
