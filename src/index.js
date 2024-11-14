import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App/App";
import store from "./redux/store"; // Import redux store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // The `<Provider>` component allows components within its tree to access the Redux `store`.
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);