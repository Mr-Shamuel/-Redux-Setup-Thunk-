import React from "react";
import './i18n'
import "./index.scss";
import AllRoutes from "./AllRoutes";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import { ToastContainer } from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <AllRoutes/>
      <ToastContainer />
    </Provider>
  //  </React.StrictMode>
);


