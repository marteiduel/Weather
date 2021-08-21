import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="right-header">
          <img
            className="logo"
            src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
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
