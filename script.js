// 
//  Blackjack Game
//  By Thais Freitas with JavaScrit
//

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'];

function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function getNextCard() {
    return deck.shift();
}

let deck = createDeck();

for (let i = 0; i < deck.length; i++) {
    // console.log(deck[i]);
}

let playerCards = [getNextCard(), getNextCard()];

console.log(" ----- ----- welcome to Blackjack! ----- -----  ");

console.log("you are dealt: ");
console.log("  " + getCardString(playerCards[0]));
console.log("  " + getCardString(playerCards[1]));
