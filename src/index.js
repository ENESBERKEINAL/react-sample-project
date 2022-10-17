import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { loginStatusReducer } from "./redux/reducers/loginstatus.reducer";
import Guard from "./Guard";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(loginStatusReducer);

root.render(
  <BrowserRouter>
    <Provider store={store}>
        <Guard></Guard>      
    </Provider>
  </BrowserRouter>
);
