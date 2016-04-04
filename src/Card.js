var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div className="card-container">
            <div className="card card-in-hand">
                <div className="top-bar card-content small-text">
                    <div className="card-name">Test Card</div>
                    <div className="mana">3</div>
                </div>
                <div className="card-art card-content"></div>
                <div className="card-type card-content small-text">Creature - Human</div>
                <div className="card-details card-content small-text">
                    This is some sample card text. When this card is played summon a 1/1 Test Card.
                </div>
                <div className="card-stats card-content small-text">3/4</div>
            </div>
        </div>

	}
});
