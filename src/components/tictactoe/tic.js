import React, { Component } from "react";

export default class Tic extends Component {
  constructor() {
    super();
    this.state = {
      turn: "X",
      board: ["", "", "", "", "", "", "", "", ""],
    };
  }

  clicked() {
    let turn = this.state.turn;
    let board = this.state.board;

    board[index] = turn;
    let possibleWinnings = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < possibleWinnings.length; i++) {
      let possibleWinnings = possibleWinnings[i];
      let pw1 = possibleWinnings[0];
      let pw2 = possibleWinnings[1];
      let pw3 = possibleWinnings[2];
      if (pw1 == pw2 && pw2 == pw3 && pw3 == pw1)
        alert(`winner!  ${turn} has won`);
    }

    board[index] = turn;
    turn = turn == "X" ? "O" : "X";
    console.log("turn", turn);
    this.setState({
      turn: turn,
      board: board,
    });
  }

  render() {
    return (
      <div className="board-wrapper">
        <div className="game-name">
          <h1>Tic tak toe</h1>
        </div>
        <div className="board">
          {this.state.board.map((square, index) => {
            return (
              <div onClick={() => this.clicked(index)} className="square">
                {square}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
