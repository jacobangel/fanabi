const React = require('react/addons');

const Hand = require('./components/Hand');

const Board = React.createClass({
  render() {
    return (
      <div>
        <Hand isFaceDown={false} cardList={this.props.handList[0]} />
      </div>
    );
  }
});
module.exports = Board;
