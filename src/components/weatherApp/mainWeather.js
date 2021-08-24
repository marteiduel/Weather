import React, { Component } from "react";

export default class MainWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: "",
      precip: "",
      high: "",
      low: "",
      city: this.props.ciudad,
      icon: "",
    };
    this.getData = this.getData.bind(this);
    this.displayWeather = this.displayWeather.bind(this);
  }

  componentDidUpdate(propsanteriores) {
    if (this.props.ciudad != propsanteriores.ciudad) {
      console.log(this.props.ciudad);
      this.setState({ city: this.props.ciudad });
      this.getData();
    }
  }

  getData() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        this.props.ciudad +
        "&units=imperial&appid=" +
        "1b08555925c4b3f206e5d97823c01850"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  }
  displayWeather(data) {
    console.log(data);
    this.setState({
      temp: data.list[0].main.temp,
      precip: data.list[0].main.humidity,
      high: data.list[0].main.temp_max,
      low: data.list[0].main.temp_min,
      icon: data.list[0].weather[0].icon,
    });
  }

  render() {
    return (
      <div className="main-weather">
        <div className="weather-left">
          <div className="weather-info">
            <p>Temperature: {this.state.temp}°</p>
            <p>Precipitation: {this.state.precip}%</p>
            <p>High: {this.state.high}°</p>
            <p>Low: {this.state.low}°</p>
          </div>
        </div>
        <div className="image-main-weather">
          <img
            className="logo-weather"
            src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
          />
        </div>
        <div className="weather-right">
          <div className="city-info">
            <p> {this.state.city}</p>
          </div>
        </div>
      </div>
    );
  }
}
