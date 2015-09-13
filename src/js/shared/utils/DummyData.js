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
module.exports = {
  getRandomHand,
  getRandomCard
}
