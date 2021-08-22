import React, { Component } from "react";

import Header from "./header";
import MainWeather from "./mainWeather";
import SearchBar from "./searchBar";
import Cards from "./weatherCards";
import Footer from "./footer";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Provo",
    };
    this.changingCity = this.changingCity.bind(this);
  }

  changingCity(searchbarCity) {
    this.setState({
      city: searchbarCity,
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchBar changingCity={this.changingCity} />
        <MainWeather ciudad={this.state.city} />
        <div className="forecast-section">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Footer />
      </div>
    );
  }
}
