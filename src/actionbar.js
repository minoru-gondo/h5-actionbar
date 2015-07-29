require('./actionbar.less');

var React = require('react');

var HActionbar = React.createClass({
    propTypes: {
        store: React.PropTypes.object.isRequired
    },
    render: function () {
        var actions = this.props.store;
        var props = {};
        props.className = ['h_actionbar'];

        return (React.createElement("div", props, [actions])


        );

    }
});

module.exports = HActionbar;
