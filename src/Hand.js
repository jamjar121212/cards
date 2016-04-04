var React = require('react');

var _ = require("lodash");

var Card = require("./Card.js");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            cards: 0
        };
    },
    addCard() {
        this.setState({cards: this.state.cards + 1});
    },
	render() {
		return (
            <div className="hand" onClick={this.addCard}>
                {_.range(this.state.cards).map( index => {
    					return (
    						<Card />
    					);
                })}
            </div>
        );
	}
});
