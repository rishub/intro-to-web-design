import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

function App() {
  // const [variable, setVariable] = useState(default value);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");

  const handleClick = index => {
    // JSON.stringify converts the array to a string
    // JSON.parse converts the string to an array
    // together, they create a clone of the array
    const clonedBoard = JSON.parse(JSON.stringify(board));
    clonedBoard[index] = turn;
    setBoard(clonedBoard);
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }

    // TODO: add winning logic using winningCombos
  }

  return (
    <div className="App">
      Current Turn: {turn}
      <div className='board'>
        {board.map((square, index) => {
          return <div className="square" onClick={() => handleClick(index)}>{square}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
