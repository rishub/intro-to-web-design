import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

function App() {
  // const [variable (var), setVariable (func)] = useState(default value (any value));
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");

  const checkWinner = (clonedBoard) => {
    // foundWinningCombo is a boolean
    const foundWinningCombo = winningCombos.find(combo => { // [0,1,2]
      if (clonedBoard[combo[0]] === turn 
        && clonedBoard[combo[1]] === turn 
        && clonedBoard[combo[2]] === turn) {
        return true;
      } else {
        // we failed to find a winning combo
        return false;
      }
    })
    return foundWinningCombo;
  }

  const handleClick = index => {
    if (board[index] !== "") {
      return; // end this function
    }

    // this doesn't work because it references the same data
    // const clonedBoard = board;
    // you want a copy of the board in order to modify it

    // JSON.stringify converts the array to a string
    // JSON.parse converts the string to an array
    // together, they create a clone of the array as a new array
    const stringBoard = JSON.stringify(board); 
    const clonedBoard = JSON.parse(stringBoard);

    clonedBoard[index] = turn; // set the index in the board array to the current turn

    // update the board variable with the new board
    // does not update the board immediately
    setBoard(clonedBoard);

    // before we switch turns, check if the current player won
    // to have the most up to date board, pass in clonedBoard 
    // because board won't be updated until the next render of our page
    if(checkWinner(clonedBoard)) {
      alert("WINNER is " + turn)
    }

    // switches turn to next player
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
  }

  return (
    <div>
      Current Turn: {turn}
      <div className='board'>
        {board.map((square, index) => {
          return <div className="square" onClick={() => handleClick(index)}>{square}</div>;
        })}
      </div>
    </div>
  );

  // return null;


  // const [name, setName] = useState("");

  // const onPress = e => {
  //   const value = e.target.value;
  //   setName(value);
  // }

  // return (
  //   <div>
  //     { only show h3 if first condition is true }
  //     {!name && <h3>Please enter your name below</h3>}
  //     {name && <h3>Your name is {name}</h3>}
  //     <input onChange={onPress} />
  //   </div>
  // )
}

export default App;
