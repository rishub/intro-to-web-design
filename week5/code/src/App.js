import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)  //initializes 'this'
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ]
    }
  }

  handleClick(index) {
    if(this.state.board[index] === "") {
      var new_board = this.state.board
      new_board[index] = this.state.currentTurn
      this.setState({
        board: new_board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL
      })
      if(this.checkForWinner()){
        alert("WINNER is " + new_board[index])
      }
    }
  }

  checkForWinner() {
    const squares = this.state.board;
    const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    return winningCombos.find(function(combo){
      if(squares[combo[0]] === squares[combo[1]] && squares[combo[1]] === squares[combo[2]]){
        return squares[combo[0]];
      } else {
        return false;
      }
    })
  }

  render() {
    return (
      <div className="board">
        {this.state.board.map((cell, index) => {
          return <div key={index} onClick={() => this.handleClick(index)} data-cell-id={index} className="square">{cell}</div>;
        })}
      </div>
    )
  }
}

export default App;
