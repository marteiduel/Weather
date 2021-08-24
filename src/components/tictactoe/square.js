import React, { Component } from "react";

export default class Square extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <td onClick={() => turnClick()}></td>
      </div>
    );
  }
}

const turnClick = () => {
  alert("test");
};
