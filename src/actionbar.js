require('./actionbar.less');

var React = require('react');

var HActionbar = React.createClass({
    propTypes: {
        store: React.PropTypes.object.isRequired
    },
    render: function () {
        var actions = this.props.store.actions;
        var props = {};
        props.className = ['h_actionbar'];
        var children = [];
        for(var action in actions)
        {
            var child = React.createElement(H5Action, {action:action, store:this.props.store});
            children.push(child);
        }

        return (React.createElement("div", props, children)


        );

    }
});

module.exports = HActionbar;
