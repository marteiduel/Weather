import React, { Component } from "react";
import GoogleMaps from "./googleMaps";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "provo",
    };
  }
  render() {
    return (
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <GoogleMaps changingCity={this.props.changingCity} />
        </div>
      </div>
    );
  }
}
