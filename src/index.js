import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import "./styles/index.scss";
import App from "./app";
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <React.StrictMode>
          <HashRouter>
              <App />
          </HashRouter>
      </React.StrictMode>
  </Provider>
);
