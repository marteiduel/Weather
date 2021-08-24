import { ContactSupport } from "@material-ui/icons";
import React, { Component } from "react";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      high: "",
      low: "",
      icon: "",
    };
    this.getData = this.getData.bind(this);
    this.displayWeather = this.displayWeather.bind(this);
    this.CheckDay = this.CheckDay.bind(this);
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
      high: data.list[this.props.id].main.temp_max,
      low: data.list[this.props.id].main.temp_min,
      icon: data.list[this.props.id].weather[0].icon,
    });
  }

  CheckDay() {
    var weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var dy = new Date();
    console.log(parseInt(this.props.id) + dy.getDay());
    if (parseInt(this.props.id) + dy.getDay() > 6) {
      console.log(weekday[parseInt(this.props.id) + dy.getDay() - 7]);
      return weekday[parseInt(this.props.id) + dy.getDay() - 7];
    } else {
      console.log(weekday[parseInt(this.props.id) + dy.getDay()]);
      return weekday[parseInt(this.props.id) + dy.getDay()];
    }
  }

  render() {
    return (
      <div className="card-section">
        <div className="card-wrapper">
          <div className="top-part">
            <div className="day-of-week">{this.CheckDay()}</div>
            <div className="card-img">
              <img
                src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
              />
            </div>
          </div>
          <div className="bottom-part">
            <p>Min: {this.state.high}°</p>
            <p>Max: {this.state.low}°</p>
          </div>
        </div>
      </div>
    );
  }
}
