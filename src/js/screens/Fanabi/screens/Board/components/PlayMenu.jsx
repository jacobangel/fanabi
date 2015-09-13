const React = require('react/addons');
const cn = require('classnames');

// const ss = require('./PlayMenu.less');

const SUITS = require('constants/suits')
const ORIENTATIONS = require('constants/orientations');

/**
 * The most basic fundamental unit in the game is the card. It has a point value
 * and a color. Perhaps should be decomposed into three values, a card, and then
 * faceUpCard and faceDownCard to avoid leaking information.
 */
const PlayMenu = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      onClick: ()=>{console.log('no click handler bound')},
    };
  },

  handleAction(action) {
    console.log('handleasction');
    switch(action) {
    }
  },

  linkHandler(action) {
    return {
      onClick: (e) => {this.handleAction(action)}
    }
  },

  render() {
    const { } = this.props;
    let classList = '';
    return (
      <div className={cn('play-menu', classList)} >
        <ul>
          <li><button {...this.linkHandler('discard')}>Discard</button></li>
          <li><button {...this.linkHandler('play')}>Play</button></li>
          <li><button {...this.linkHandler('hint')}>Hint</button></li>
        </ul>
      </div>
    );
  }
});
module.exports = PlayMenu;
