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
        "&units=metric&appid=" +
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

  render() {
    return (
      <div className="card-section">
        <div className="card-wrapper">
          <div className="top-part">
            <div className="day-of-week">Day of week</div>
            <div className="card-img">
              <img
                src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
              />
            </div>
          </div>
          <div className="bottom-part">
            <p>Min: {this.state.high}</p>
            <p>Max: {this.state.low}</p>
          </div>
        </div>
      </div>
    );
  }
}
