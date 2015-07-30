require('./actionbar.less');

var React = require('react');
var H5Action = require('h5-action/src/action.js');

var HActionbar = React.createClass({
    propTypes: {
        store: React.PropTypes.object.isRequired
    },
    render: function () {
        var actions = this.props.store.actions;
        var props = {};

        var kinds = [];
        props.className = ['h_actionbar'];
        var children = [];
        for(var action in actions)
        {
            var propsButton = {};
            if(this.props.store.actions[action].kind == 'primary' || this.props.store.actions[action].kind == 'secondary')
               propsButton.className = 'position_kinds_major';
            if(this.props.store.actions[action].kind == 'tertiary' || this.props.store.actions[action].kind == '' || this.props.store.actions[action].kind == 'normal')
               propsButton.className = 'position_kinds_minor';

            propsButton.action = action;
            propsButton.store = this.props.store.actions;

            var child = React.createElement(H5Action, propsButton);
            children.push(child);
        }

        return (React.createElement("div", props, children)


        );

    }
});

module.exports = HActionbar;
