import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import YourStore from "./stores/YourStore";

const yourstore = new YourStore();

const RenderComponent = () => (
  <Provider yourstore={yourstore}>
    <App />
  </Provider>
);

ReactDOM.render(<RenderComponent />, document.getElementById("root"));
