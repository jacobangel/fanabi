const suits = require('constants/suits');
const getDeck = (numSuits=5) => {
  const deck = [];
  const suitList = Object.keys(suits);
  const cardsInSuit = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5];
  for (let i = 0; i < numSuits; i++) {
    deck.push(...cardsInSuit.map(n => {
      return { suit: suitList[i], value: n, orientation: 'UP' }
    }));
  }
  return deck;
};

/**
 * The deck.
 */
class Deck {
  constructor(deck = getDeck()) {
    if (!Array.isArray(deck)) {
      throw new Error('Invalid deck: must be an array.')
    }
    this.deck = deck;
  }

  getDeck() {
    return this.deck;
  }

  size() {
    return this.deck.length;
  }

  // fisheryates
  shuffle() {
    const n = this.deck.length;
    for (let i = n - 1; i >= 1; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }

  drawCard() {
    return this.deck.pop();
  }
}

module.exports = Deck;
