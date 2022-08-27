import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureProductStore from "./hooks-store/products-store";
import ProductsProvider from "./context/products-context";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
configureProductStore();

root.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>
);
