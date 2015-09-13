const React = require('react/addons');

const Lobby = React.createClass({
  propTypes: {

  },
  getDefaultProps() {
    return {
      awaitingGames: []
    };
  },
  handleJoinGame(id) {
    console.log('trying to join', id);
  },

  handleNewGame() {
    console.log('attempt to start new game');
  },

  renderWaitingGames() {
    const { awaitingGames } = this.props;
    return awaitingGames.map((game, i) => {
      return (
        <div>
          <button onClick={this.handleJoinGame.bind(this, game.id)}>Join Game {i}</button>

        </div>
      );
    })
  },

  render() {
    return (
      <div>
        <h1>Lobby</h1>
        <div>
          <button onClick={this.handleJoinGame}>Start New Game</button>
        </div>
        <div>
          <h2>Join Game</h2>
          <ul>
            {this.renderWaitingGames()}
          </ul>
        </div>
      </div>
    );
  }
});
module.exports = Lobby;
