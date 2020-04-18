const gameState = {
	PLAYER_ONE_SYMBOL: "X",
	PLAYER_TWO_SYMBOL: "O",
	currentTurn: "X",
	board: [
		"","","","","","","","",""
	]
}

function addListener() {
	const board = document.querySelector('.board')
	board.addEventListener('click', function(e) {
		const squareIndex = parseInt(e.target.dataset['squareId'], 10)
		gameState.board[squareIndex] = gameState.currentTurn
		if(checkForWinner()){
			alert("WINNER is " + gameState.currentTurn)
		}
		gameState.currentTurn = gameState.currentTurn === gameState.PLAYER_ONE_SYMBOL ? gameState.PLAYER_TWO_SYMBOL : gameState.PLAYER_ONE_SYMBOL
		render(gameState)
	})
}

function checkForWinner() {
	const squares = gameState.board;
	const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
	return winningCombos.find(function(combo){
		if(squares[combo[0]] === squares[combo[1]] && squares[combo[1]] === squares[combo[2]]){
			return squares[combo[0]];
		} else {
			return false;
		}
	})
}

const render = function(state) {
	document.querySelector('.render-target').innerHTML = "<div class='board'>" +
		"<div class='square' data-square-id='0'>" + state.board[0] + "</div>" +
		"<div class='square' data-square-id='1'>" + state.board[1] + "</div>" +
		"<div class='square' data-square-id='2'>" + state.board[2] + "</div>" +
		"<div class='square' data-square-id='3'>" + state.board[3] + "</div>" +
		"<div class='square' data-square-id='4'>" + state.board[4] + "</div>" +
		"<div class='square' data-square-id='5'>" + state.board[5] + "</div>" +
		"<div class='square' data-square-id='6'>" + state.board[6] + "</div>" +
		"<div class='square' data-square-id='7'>" + state.board[7] + "</div>" +
		"<div class='square' data-square-id='8'>" + state.board[8] + "</div>" +
		"</div>"
	addListener();
}

render(gameState);
