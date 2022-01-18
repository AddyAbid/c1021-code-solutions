console.log('Lodash is loaded:', typeof _ !== 'undefined');
const players = [
  {
    name: 'Tim',
    hand: [],
    score: 0
  },
  {
    name: 'Cody',
    hand: [],
    score: 0
  },
  {
    name: 'Cass',
    hand: [],
    score: 0
  },
  {
    name: 'Bill',
    hand: [],
    score: 0
  }
];

function renderDeck() {
  var deck = [];
  const suits = ['clubs', 'diamonds', 'spades', 'hearts'];
  const ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  for (var i = 0; i < suits.length; i++) {
    var eachSuit = suits[i];
    for (var j = 0; j < ranks.length; j++) {
      const card = {};
      card.suit = eachSuit;
      card.rank = ranks[j];
      deck.push(card);
    }
  }
  return deck;
}
renderDeck();

const shuffled = _.shuffle(renderDeck());
function shuffleCards() {
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < 2; j++) {
      var topCard = shuffled.pop();
      players[i].hand.push(topCard);
    }
  }
}
shuffleCards();

function getWinner() {
  const hands = [];
  const handTotals = [];
  const eachPlayer = [...players];
  for (var i = 0; i < players.length; i++) {
    hands.push(players[i].hand);
  }
  for (var j = 0; j < hands.length; j++) {
    const total = hands[j].reduce((score, cards) => {
      if (cards.rank === 'ace') {
        cards.rank = 11;
      } else if (cards.rank === 'jack') {
        cards.rank = 10;
      } else if (cards.rank === 'queen') {
        cards.rank = 10;
      } else if (cards.rank === 'king') {
        cards.rank = 10;
      }
      return score + cards.rank;
    }, 0);
    handTotals.push(total);
  }
  eachPlayer[0].score = handTotals[0];
  eachPlayer[1].score = handTotals[1];
  eachPlayer[2].score = handTotals[2];
  eachPlayer[3].score = handTotals[3];
  const winningNumber = Math.max(...handTotals);
  for (var player = 0; player < eachPlayer.length; player++) {
    if (eachPlayer[player].score === winningNumber) {
      const winner = `The winning player is ${eachPlayer[player].name} with a score of ${winningNumber}`;
      console.log(winner);
      return winner;
    }
  }
}
getWinner();
