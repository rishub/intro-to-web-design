// const means the variable is constant and cannot be canged
// let means the variable is okay to change

// let i = 0;
// i = 1; // good

// const i = 0;
// i = 1; // bad

const displayBoard = function() {
	document.querySelector('.target').innerHTML = "<div class='board'>" +
		"<div class='square'></div>" +
		"<div class='square'></div>" +
		"<div class='square'></div>" +
		"<div class='square'></div>" +
		"<div class='square'></div>" +
		"<div class='square'></div>" +
		"<div class='square'></div>" +
		"<div class='square'></div>" +
		"<div class='square'></div>" +
	"</div>"
}

displayBoard();
