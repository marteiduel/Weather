import React, { useState } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState();

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((combination) => {
        if (
          squares[combination[0]] === "" ||
          squares[combination[1]] === "" ||
          squares[combination[2]] === ""
        ) {
        } else if (
          squares[combination[0]] === squares[combination[1]] &&
          squares[combination[1]] === squares[combination[2]]
        ) {
          setPlayer(squares[combination[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("Choose another square");
      return;
    }

    let squares = [...cells];

    if (turn === "O") {
      squares[num] = "O";
      setTurn("X");
    } else {
      squares[num] = "X";
      setTurn("O");
    }

    checkForWinner(squares);
    setCells(squares);
  };

  const handleRestart = () => {
    setPlayer(null);
    setCells(Array(9).fill(""));
  };

  const Cell = ({ num }) => {
    return (
      <td onClick={() => handleClick(num)}>
        <div className="xo">{cells[num]}</div>
      </td>
    );
  };

  return (
    <div className="board-wrapper">
      <div className="table">
        Turn: {turn}
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
          <button onClick={() => handleRestart()}>Play Again</button>
        </tbody>
      </div>
      {player && (
        <div className="scoreboard">
          <div className="score">{player}'s Wins!</div>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
