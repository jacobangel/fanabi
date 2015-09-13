const React = require('react/addons');
const cn = require('classnames');

const ss = require('./Hand.less');
const Card = require('./Card');

const SUITS = require('constants/suits')
const ORIENTATIONS = require('constants/orientations');

/**
 * The most basic fundamental unit in the game is the card. It has a point value
 * and a color. Perhaps should be decomposed into three values, a card, and then
 * faceUpCard and faceDownCard to avoid leaking information.
 */
const Hand = React.createClass({
  propTypes: {
    cardList: React.PropTypes.array, // make a shape instead.
    isFaceDown: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      orientation: ORIENTATIONS.UP,
      onClick: ()=>{console.log('no click handler bound')},
    };
  },

  renderCard(card) {
    if (this.props.isFaceDown) {
      return <Card isFaceDown={true} />
    } else {
      return <Card {...card} />
    }
  },

  render() {
    const { isFaceDown, cardList } = this.props;
    let classList = isFaceDown? 'isFaceDown' : '';
    return (
      <div className={cn('hand', ss.container, classList)}
        onClick={this.props.handleClick}
        >
        {cardList.map(this.renderCard)}
      </div>
    );
  }
});
module.exports = Hand;
