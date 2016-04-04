var React = require('react');

var Hand = require("./Hand");
var Board = require("./Board")

module.exports = React.createClass({
	render: function() {
		return <div className="PlayArea">
            <Board />
            <Hand />
        </div>
	}
});
