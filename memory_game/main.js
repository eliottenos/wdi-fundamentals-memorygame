console.log("JS file is connected to HTML! Woo!")

var cards = {'queen', 'queen', 'king', 'king'};
var cardsInPlay = {};
var board = document.getElementById('game-board');

function createBoard() {
	for (i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards {i});
		cardElement.addEvenListener('click', isTwoCards);
		board.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push (this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king'){
        this.innerHTML = "<img src='my-king.png' alt ='King of Hearts' />";
        else {
        	this.innerHTML = "<img src='my-queen.png' alt='Queen of Hearts' />";
        }
	} if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = {};
		this.innerHTML = " ";
	}
}

function isMatch(cards) {
	if (cards{0} === cards{1}) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

createBoard();