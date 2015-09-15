const React = require('react/addons');
import { connect } from 'react-redux';
import { addGame, joinGame } from 'actions';

const Lobby = React.createClass({
  propTypes: {
    awaitingGames: React.PropTypes.array,
    currentUser: React.PropTypes.object,
  },
  getDefaultProps() {
    return {
      awaitingGames: []
    };
  },
  handleJoinGame(id) {
    console.log('trying to join', id);
    const { dispatch } = this.props;
    dispatch(joinGame(this.props.currentUserId, id));
  },

  handleNewGame() {
    console.log('attempt to start new game');
    const { dispatch } = this.props;
    dispatch(addGame(this.props.currentUserId));
    // then go to the game.
  },

  renderWaitingGames() {
    const { awaitingGames } = this.props;
    return awaitingGames.map((game, i) => {
      return (
        <div>
          <button onClick={this.handleJoinGame.bind(this, game.gameId)}>Join Game {i}</button>
        </div>
      );
    })
  },

  render() {
    return (
      <div>
        <h1>Lobby</h1>
        <div>
          <button onClick={this.handleNewGame}>Start New Game</button>
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
module.exports = connect(
  (state) => {
    console.log(state);
    return {
      awaitingGames: state.gameReducer,
      currentUserId: state.userReducer.cid,
    }
  }
)(Lobby);
