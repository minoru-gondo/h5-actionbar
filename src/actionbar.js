require('./actionbar.less');

var React = require('react');
var H5Action = require('h5-action/src/action.js');
var H5MenuDropdown = require('h5-menudropdown/src/h5-menudropdown.js');

var HActionbar = React.createClass({
    propTypes: {
        store: React.PropTypes.object.isRequired
    },
    render: function () {
        var actions = this.props.store.actions;
        if(Object.keys(actions).length == 0)
            throw "O actionbar não pode ficar sem actions";
        var props = {};
        var i = 0;
        var kinds = [];
        props.className = ['h_actionbar'];
        var children = [];
        for(var action in actions)
        {
            i++;
            var propsButton = {};
            var propsMenuDropdown = {};
            var child;
            var child_dropdown;
            if(this.props.store.actions[action].kind != 'primary' && i == 1 && action != 'menu') {
                throw "O primeiro action precisa ter kind primary";
            }
            if(this.props.store.actions[action].kind == 'test'){
               propsButton.className = 'inside_partly';
            }
            if(this.props.store.actions[action].kind == 'primary' || this.props.store.actions[action].kind == 'secondary')
               propsButton.className = 'position_kinds_major';
            if(this.props.store.actions[action].kind == 'tertiary' || this.props.store.actions[action].kind == '' || this.props.store.actions[action].kind == 'normal')
               propsButton.className = 'position_kinds_minor';
            if(action == 'menu'){
               propsMenuDropdown.menu = this.props.store.actions.menu;
               propsMenuDropdown.icon = this.props.icon;
               propsMenuDropdown.left = this.props.left;
               propsMenuDropdown.right = this.props.right;
               propsMenuDropdown.top = this.props.top;
               propsMenuDropdown.bottom = this.props.bottom;
               child_dropdown = React.createElement(H5MenuDropdown, propsMenuDropdown);
               children.push(child_dropdown);
            }
            if(action != 'menu'){
            propsButton.action = action;
            propsButton.store = this.props.store.actions;

            child = React.createElement(H5Action, propsButton);
            children.push(child);
            }
        }

        return (React.createElement("div", props, children)


        );

    }
});

module.exports = HActionbar;
