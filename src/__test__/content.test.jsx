import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import Content from "../pages/detail/content";

const mockStore = configureStore([thunk]);

test("store yukleme durumundayken ekrana loader gelir", () => {
  const store = mockStore({ isLoading: true, error: null, data: null });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
});
