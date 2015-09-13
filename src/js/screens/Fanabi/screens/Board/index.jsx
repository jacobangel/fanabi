const React = require('react/addons');
const Player = require('./components/Player');
const DummyData = require('utils/DummyData');
const Board = React.createClass({
  getDefaultProps() {
    const playerList = [
      DummyData.getRandomPlayer(),
      DummyData.getRandomPlayer(),
      DummyData.getRandomPlayer(),
      DummyData.getRandomPlayer(),
    ];
    return {
      activePlayerId: playerList[Math.floor(Math.random()*playerList.length)].id,
      playerList
    };
  },
  render() {
    return (
      <div>
        {this.props.playerList.map((play) => {
          const isCurrentPlayer = play.id === this.props.activePlayerId;
          // should be true
          return <Player isFaceDown={isCurrentPlayer} handData={play.hand} name={play.name} id={play.id}/>
        })}
      </div>
    );
  }
});
module.exports = Board;
