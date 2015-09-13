const React = require('react/addons');
const cn = require('classnames');

const SUITS = require('constants/suits')
const ORIENTATIONS = require('constants/orientations');

/**
 * The most basic fundamental unit in the game is the card. It has a point value
 * and a color. Perhaps should be decomposed into three values, a card, and then
 * faceUpCard and faceDownCard to avoid leaking information.
 */
const Card = React.createClass({
  propTypes: {
    suit: React.propTypes.oneOf(Object.keys(SUITS)),
    value: React.propTypes.number,
    orientation: React.propTypes.oneOf(Object.keys(ORIENTATIONS)),
    isFaceDown: React.propTypes.bool,
    onClick: React.propTypes.func
  },

  getDefaultProps() {
    return {
      orientation: ORIENTATIONS.UP,
      onClick: ()=>{console.log('no click handler bound')},
    };
  },

  render() {
    const { orientation, suit, value, isFaceDown } = this.props;
    let classList = isFaceDown? 'isFaceDown' : [orientation, value, suit];
    return (
      <div className={cn('card', classList)}
        onClick={this.props.handleClick}
        >
        {value}
      </div>
    );
  }
});
module.exports = Card;
