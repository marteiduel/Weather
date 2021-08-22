import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="right-header">
          <img
            className="logo"
            src="https://lh6.googleusercontent.com/yYgTkRldFwP4TvaDpVXzEr61ydR3r_--Rxo6JW99VhZJeK2Tw-pKtRsoyQ8a-JHj54lB5ZI_LV0RboNV1ewgMWjM-BeSTX_OChjFKIqXL13zCcnJ5wbnB3YCMw-N9sc75Q=w1280"
          />
          <div className="title">Weather App</div>
        </div>
        <div className="left-header">
          <div className="current-page">Current Page: Weather App</div>
          <button className="button">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
