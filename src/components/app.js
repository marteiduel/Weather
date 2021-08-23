import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Weather from "./weatherApp/weather";
import Tic from "./tictactoe/tic";
import Header from "./comComps/header";
import Footer from "./comComps/footer";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="overall">
          <Header />
          <Route path="/weather" component={Weather} />
          <Route path="/tic" component={Tic} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
