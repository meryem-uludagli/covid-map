import { render, screen } from "@testing-library/react";
import Heading from "../pages/detail/heading";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const mockStore = configureStore([thunk]);
it("store yüklenme durumundayken ekrana loader basılır", () => {
  const store = mockStore({ isLoading: false, error: null, data: null });

  render(
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Heading />
        </BrowserRouter>
      </Provider>
    </>
  );
  //ekrana loader basiliyor mu?
  screen.getByTestId("header-loader");
});
it("store'da yüklenme bittiğinde ekranda loader yoktur", () => {});
it("store'a veri geldiğinde ekrana veriler basılır", () => {});
