const suits = require('constants/suits');

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
const s4 = () => Math.floor((1 + Math.random()) * 0x10000) .toString(16) .substring(1);
const guid = () => {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

const getRandomPlayer = () => {
  return {
    hand: getRandomHand(5),
    name: names[Math.floor(Math.random() * names.length)],
    id: guid()
  }
}

module.exports = {
  getRandomHand,
  getRandomCard,
  getRandomPlayer
}
