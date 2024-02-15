import Header from "../Header.jsx";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on Header load", () => {
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = head.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/dummyLogo.jpg");
});
test("User should be online", () => {
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const isOnline = head.getByTestId("isOnline");
  expect(isOnline.innerHTML).toBe("🟢");
});
test("Cart should be empty on initial render",()=>{
    const head = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const cartLength = head.getByTestId("cartLength");
    expect(cartLength.innerHTML).toBe("0");
});
