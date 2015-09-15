const suits = require('constants/suits');
import guid from './guid';

const getRandomCard = () => {
  const suitsList = Object.keys(suits);
  const randomSuit = suitsList[Math.floor(Math.random() * suitsList.length)]
  return {
     value: Math.floor(Math.random() * 5) + 1,
     suit: randomSuit,
     orientation: 'UP'
  }
};

const getRandomHand = (n=5) => {
  let newArr = [];
  for (let i = 0; i<n; i++) {
    newArr.push(getRandomCard());
  }
  return newArr;
}

const names = [
    'Jason', 'Canberra', 'Huley', 'Peridot', 'Jermaine', 'Hammon', 'Archer'
];

const getRandomPlayer = () => {
  return {
    hand: getRandomHand(5),
    name: names[Math.floor(Math.random() * names.length)],
    id: guid()
  }
}

const getRandomGame = () => {
  const playerList = [
    DummyData.getRandomPlayer(),
    DummyData.getRandomPlayer(),
    DummyData.getRandomPlayer(),
    DummyData.getRandomPlayer(),
  ];
  return {
    id: guid(),
    players: playerList,
    activePlayerId: playerList[Math.floor(Math.random()*playerList.length)].id,
  }
};

module.exports = {
  getRandomHand,
  getRandomCard,
  getRandomPlayer
}
