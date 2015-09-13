const React = require('react/addons');
const cn = require('classnames');

//const ss = require('./Hand.less');
const Hand = require('./Hand');
const PlayMenu = require('./PlayMenu');

const SUITS = require('constants/suits')
const ORIENTATIONS = require('constants/orientations');

const HUD = React.createClass({

  propTypes: {
  },
  render() {
    return (
        <div>
          <div>{this.props.name}</div>
          <Hand cardList={this.props.handData}/>
          <PlayMenu />
        </div>
    );
  }
});
module.exports = HUD;
