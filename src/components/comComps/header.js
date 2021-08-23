import React, { Component } from "react";
import { Link } from "react-router";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="right-header">
          <img
            className="logo"
            src="https://lh5.googleusercontent.com/9S8GNlaYe55Eghd7RC8vnWwaEUNZV5Htcs25kziOO3U_VbUKdmhYL-ozLhMoreBUkK6Ev7N8S-5jE7SFmupMdYt_OsvIPAklMBuXD4aGunKn2Wd7GQLWUVeQMouAndLOaw=w1280"
          />
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
