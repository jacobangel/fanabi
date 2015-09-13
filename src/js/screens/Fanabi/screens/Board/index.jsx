const React = require('react/addons');
const Hand = require('./components/Hand');
const DummyData = require('utils/DummyData');
const Board = React.createClass({
  getDefaultProps() {
    return {
      handList: [
        DummyData.getRandomHand(5),
        DummyData.getRandomHand(5),
        DummyData.getRandomHand(5),
        DummyData.getRandomHand(5),
      ]
    };
  },
  render() {
    return (
      <div>
        {this.props.handList.map((hand) => {
          return <Hand isFaceDown={false} cardList={hand} />
        })}
      </div>
    );
  }
});
module.exports = Board;
