import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

import './style.css';

toast.configure();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);