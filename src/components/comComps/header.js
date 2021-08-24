import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="right-header">
          <img className="logo" src="./logo" />
          <div className="title">Current Page</div>
        </div>
        <div className="left-header">
          <div className="current-page-weather">
            <Link to="/weather">Weather</Link>
          </div>

          <div className="current-page-tic">
            <Link to="/tic">Tic Tac Toe</Link>
          </div>

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
