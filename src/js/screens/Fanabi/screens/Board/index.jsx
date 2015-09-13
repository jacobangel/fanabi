const React = require('react/addons');

const Hand = require('./components/Hand');

const Board = React.createClass({
  getDefaultProps() {
    return {
      handList: [[
          { suit: 'RED', value: 1 },
          { suit: 'BLUE', value: 3 },
          { suit: 'WHITE', value: 1 },
      ]],
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
