import React from "react";
import { Provider } from "react-redux";

import { RootContainer } from "./pages/RootContainer/RootContainer";
import { store } from "./store";

export const App = () => (
  <div className="App">
    <Provider store={store}>
      <RootContainer />
    </Provider>
  </div>
);
