console.log('Lodash is loaded:', typeof _ !== 'undefined');
const players = [{ name: 'Tim', hand: [], score: 0 }, { name: 'Cody', hand: [], score: 0 }, { name: 'Cass', hand: [], score: 0 }, { name: 'Bill', hand: [], score: 0 }];

const cards = [{ rank: 'ace', suit: 'clubs' }, { rank: 2, suit: 'clubs' }, { rank: 3, suit: 'clubs' }, { rank: 4, suit: 'clubs' }, { rank: 5, suit: 'clubs' },
  { rank: 6, suit: 'clubs' }, { rank: 7, suit: 'clubs' }, { rank: 8, suit: 'clubs' }, { rank: 9, suit: 'clubs' }, { rank: 10, suit: 'clubs' }, { rank: 'jack', suit: 'clubs' }, { rank: 'queen', suit: 'clubs' }, { rank: 'king', suit: 'clubs' },
  { rank: 'ace', suit: 'diamonds' }, { rank: 2, suit: 'diamonds' }, { rank: 3, suit: 'diamonds' }, { rank: 4, suit: 'diamonds' }, { rank: 5, suit: 'diamonds' },
  { rank: 6, suit: 'diamonds' }, { rank: 7, suit: 'diamonds' }, { rank: 8, suit: 'diamonds' }, { rank: 9, suit: 'diamonds' }, { rank: 10, suit: 'diamonds' }, { rank: 'jack', suit: 'diamonds' }, { rank: 'queen', suit: 'diamonds' }, { rank: 'king', suit: 'diamonds' },
  { rank: 'ace', suit: 'hearts' }, { rank: 2, suit: 'hearts' }, { rank: 3, suit: 'hearts' }, { rank: 4, suit: 'hearts' }, { rank: 5, suit: 'hearts' },
  { rank: 6, suit: 'hearts' }, { rank: 7, suit: 'hearts' }, { rank: 8, suit: 'hearts' }, { rank: 9, suit: 'hearts' }, { rank: 10, suit: 'hearts' }, { rank: 'jack', suit: 'hearts' }, { rank: 'queen', suit: 'hearts' }, { rank: 'king', suit: 'hearts' },
  { rank: 'ace', suit: 'spades' }, { rank: 2, suit: 'spades' }, { rank: 3, suit: 'spades' }, { rank: 4, suit: 'spades' }, { rank: 5, suit: 'spades' },
  { rank: 6, suit: 'spades' }, { rank: 7, suit: 'spades' }, { rank: 8, suit: 'spades' }, { rank: 9, suit: 'spades' }, { rank: 10, suit: 'spades' }, { rank: 'jack', suit: 'spades' }, { rank: 'queen', suit: 'spades' }, { rank: 'king', suit: 'spades' }
];

const shuffled = _.shuffle(cards);

players[0].hand[0] = shuffled[0];
players[0].hand[1] = shuffled[1];
players[1].hand[0] = shuffled[2];
players[1].hand[1] = shuffled[3];
players[2].hand[0] = shuffled[4];
players[2].hand[1] = shuffled[5];
players[3].hand[0] = shuffled[6];
players[3].hand[1] = shuffled[7];

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
