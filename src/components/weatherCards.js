import React, { Component } from "react";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      high: "",
      low: "",
    }
    this.getData = this.getData.bind(this);
    this.displayWeather = this.displayWeather.bind(this);
  }
  
  componentDidUpdate(propsanteriores) {
    if (this.props.ciudad != propsanteriores.ciudad) {
      console.log(this.props.ciudad)
      this.setState({ city: this.props.ciudad });
      this.getData();
    }
  }

  getData() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      this.props.ciudad +
      "&appid=" +
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
    });
  }

  render() {
    return (
      <div className="card-section">
        <div className="card-wrapper">
          <div className="top-part">
            <div className="day-of-week">Day of week</div>
            <div className="card-img">
              <img src="https://lh6.googleusercontent.com/yYgTkRldFwP4TvaDpVXzEr61ydR3r_--Rxo6JW99VhZJeK2Tw-pKtRsoyQ8a-JHj54lB5ZI_LV0RboNV1ewgMWjM-BeSTX_OChjFKIqXL13zCcnJ5wbnB3YCMw-N9sc75Q=w1280" />
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
