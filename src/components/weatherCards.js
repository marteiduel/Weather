import React, { Component } from "react";

export default class Cards extends Component {
  constructor(props) {
    super(props);
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
            <p>Min: </p>
            <p>Max: </p>
          </div>
        </div>
      </div>
    );
  }
}
