import React, { Component } from "react";
import HomeComponent from "./src/components/home-component";
import { Provider } from "react-redux";
import store  from "./src/store/store";

class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <HomeComponent />
      </Provider>
    );
  }
}

export default App
