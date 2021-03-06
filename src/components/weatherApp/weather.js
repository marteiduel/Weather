import React, { Component } from "react";

import MainWeather from "./mainWeather";
import SearchBar from "./searchBar";
import Cards from "./weatherCards";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Provo",
    };
    this.changingCity = this.changingCity.bind(this);
  }

  changingCity(searchbarCity) {
    console.log(searchbarCity.description);
    this.setState({
      city: searchbarCity.description,
    });
  }

  render() {
    return (
      <div className="app">
        <SearchBar changingCity={this.changingCity} />
        <MainWeather ciudad={this.state.city} />
        <div className="forecast-section">
          <Cards ciudad={this.state.city} id={"1"} />
          <Cards ciudad={this.state.city} id={"2"} />
          <Cards ciudad={this.state.city} id={"3"} />
          <Cards ciudad={this.state.city} id={"4"} />
          <Cards ciudad={this.state.city} id={"5"} />
        </div>
      </div>
    );
  }
}
