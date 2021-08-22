import React, { Component } from "react";

import Header from "./header";
import MainWeather from "./mainWeather";
import SearchBar from "./searchBar";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Provo",
    };
    this.changingCity = this.changingCity.bind(this);
  }

  changingCity(searchbarCity) {
    console.log(searchbarCity.description)
    this.setState({
      city: searchbarCity.description,
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchBar changingCity={this.changingCity} />
        <MainWeather ciudad={this.state.city} />
      </div>
    );
  }
}
