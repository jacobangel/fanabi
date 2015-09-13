const React = require('react/addons');
const cn = require('classnames');

const SUITS = require('constants/suits')
const ORIENTATIONS = require('constants/orientations');

const Card = React.createClass({
  propTypes: {
    suit: React.propTypes.oneOf(Object.keys(SUITS)),
    value: React.propTypes.number,
    orientation: React.propTypes.oneOf(Object.keys(ORIENTATIONS))
  },

  getDefaultProps() {
    return {
      orientation: ORIENTATIONS.UP,
    };
  },

  render() {
    const classList =
    return (
      <div className={classList}>
        <h1>Hello React</h1>
      </div>
    );
  }
});
module.exports = Card;
