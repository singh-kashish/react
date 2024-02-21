import RestaurantList from "../RestaurantList";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANTS_DATA } from "../../utils/constants.js";
test("restaurantList is loading", async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantList
          restaurants={
            RESTAURANTS_DATA.data?.cards[1]?.card?.card?.gridElements
              ?.infoWithStyle?.restaurants
          }
          geoPosition={{ lat: 72, lang: 45 }}
        />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    const restaurants = screen.getByTestId("restaurantList");
    expect(restaurants.children.length).toBe(20);
  });
});
