//Create a list that holds all of your cards
 
const symbols = ['fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 
'fa fa-paper-plane-o','fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 
'fa fa-bolt','fa fa-cube','fa fa-cube', 'fa fa-leaf', 'fa fa-leaf',
'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb'];

 const cardContainer = document.querySelector('.deck');
 let openedCards = [];
 let matchedCards = [];

 //create the cards
 function initGame() {
 for(let i=0; i<symbols.length; i++) {
     const card = document.createElement('li');
     card.classList.add('card');
     card.innerHTML = `<i class = "${symbols[i]}"</i>`;
     cardContainer.appendChild(card);
 click(card);
 }

 //card click events
 function click(card) {
    card.addEventListener('click', function() {

     const currentCard = this;
     const previousCard = openedCards[0];

     if(openedCards.length === 1) {
//so you cannot click twice on the same card
         card.classList.add('open', 'show', 'disabled');
         openedCards.push(this);
         compareCards(currentCard, previousCard);
         
     } else {
         card.classList.add('open', 'show', 'disabled');
         openedCards.push(this);
     }
    });
}

//compare the two cards
function compareCards(currentCard, previousCard) {
    if (currentCard.innerHTML === previousCard.innerHTML) {
        currentCard.classList.add('match');
        previousCard.classList.add('match');
        matchedCards.push(currentCard, previousCard);

        openedCards = [];
        isOver();
    } else {

        setTimeout(() => {
            currentCard.classList.remove('open', 'show', 'disabled');
            previousCard.classList.remove('open', 'show', 'disabled');
            openedCards = [];
        }, 1000);
    }
    countMoves();
}

//check if the game is finished
function isOver() {
    if(matchedCards.length === symbols.length) {
        alert('game over');
        }
    }
}
//restart the game
const restartGame = document.querySelector('.restart');

restartGame.addEventListener('click', function() {
//delete all cards  
cardContainer.innerHTML = '';
//call initGame to create new cards
initGame();
//reset all related variables
matchedCards = [];
})
//start the game for the first time
initGame();

//moves
let moves = 0;
function countMoves() {
moves++;
    
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
