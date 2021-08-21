import React, { Component } from "react";
import { Route } from "react-router";

import Weather from "./weather";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/weather">
          <Weather />
        </Route>
      </div>
    );
  }
}
