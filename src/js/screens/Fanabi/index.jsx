const React = require('react/addons');
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const Link = ReactRouter.Link


const Board = require('./screens/Board');
const Lobby = require('./screens/Lobby');

const Fanabi = React.createClass({
  render() {
    return (
      <div>
        <h1>Funabi</h1>
        <ul>

        <li><Link to="/lobby">Lobby</Link></li>
        <li><Link to="/board">Board</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});
module.exports = Fanabi;
