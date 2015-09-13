const React = require('react/addons');
const Board = require('./screens/Board');

const exampleList = [
  [
    { suit: 'RED', value: 1 },
    { suit: 'BLUE', value: 3 },
    { suit: 'WHITE', value: 1 },
  ]
];
const Fanabi = React.createClass({
  render() {
    return (
      <div>
        <h1>Funabi</h1>
        <Board handList={exampleList} />
      </div>
    );
  }
});
module.exports = Fanabi;
