require('./actionbar.less');

var React = require('react');
var H5Action = require('h5-action/src/action.js');
var H5MenuDropdown = require('h5-menudropdown/src/h5-menudropdown.js');

var HActionbar = React.createClass({
    propTypes: {
        store: React.PropTypes.object.isRequired
    },
    render: function () {
        var _this=this;
        var store = this.props.store;
        var actions = store.actions;
        var width_app = document.querySelector("html");
        var children = [], dropdownMenuItems;
        var action_names = Object.keys(actions);
        render_primary()
        render_secondary()
        if(width_app && width_app.offsetWidth >= 639){
        render_tertiary()
        render_tertiary()
        render_tertiary()
        }
        if (width_app && width_app.offsetWidth <= 638 && width_app.offsetWidth >= 570) {
        render_tertiary()
        render_tertiary()
        }
        if(width_app && width_app.offsetWidth <= 569 && width_app.offsetWidth >= 500){
        render_tertiary()
        }

        while (action_names.length > children.length + (dropdownMenuItems?Object.keys(dropdownMenuItems).length:0))
            render_menu_item();
        if (dropdownMenuItems)
            createDropdownMenu();
        return React.createElement("div", {key: "ActionBar", className: 'h_actionbar', children: children});

        function render_primary()
        {
            if (children.length>=action_names.length)
                return;
            var action_name = action_names[children.length];
            if(store.actions[action_name].kind != 'primary')
                throw 'O primeiro action precisa ter kind: "primary"';
            var child = React.createElement(H5Action, {store: store, action: action_name, key: "actionBarPrimary_" + action_name, run: function(){}, className: 'position_right'});
            children.unshift(child);
        }

        function render_secondary()
        {
            if (children.length>=action_names.length)
                return;
            var action_name = action_names[children.length];
            var child = React.createElement(H5Action, {store: store, action: action_name, key: "actionBarSecondary_" + action_name, run: function(){}, className: 'position_right'});
            children.push(child);
        }

        function render_tertiary()
        {
            var is_menudropdown;
            if (children.length >= action_names.length)
                return;
            if(action_names.length > 5){
                is_menudropdown = 'position_actions_tertiary';
            }
            var action_name = action_names[children.length];
            var child = React.createElement(H5Action, {store: store, key: "actionBarTertiary_" + action_name, action: action_name, run: function(){}, className: 'position_left ' + is_menudropdown});
            children.push(child);
        }

        function render_menu_item(valida_action)
        {
            if (children.length + (dropdownMenuItems?Object.keys(dropdownMenuItems).length:0) >= action_names.length)
                return;
            if (!dropdownMenuItems)
               dropdownMenuItems = {}
            if(valida_action == true){
            var action_name = action_names[children.length + Object.keys(dropdownMenuItems).length];
            valida_action = false;
            }
            else
            var action_name = action_names[children.length + Object.keys(dropdownMenuItems).length];
            dropdownMenuItems[action_name] = actions[action_name];
        }

        function createDropdownMenu()
        {
//               propsMenuDropdown.left = this.props.left;
//               propsMenuDropdown.right = this.props.right;
//               propsMenuDropdown.top = this.props.top;
//               propsMenuDropdown.bottom = this.props.bottom;
               var chield = React.createElement(H5MenuDropdown, {
                   key: "MenuDropDrow",
                   ref: 'menu',
                   actions: dropdownMenuItems,
                   icon: _this.props.icon + " position_icon_actionbar"
               });
               children.unshift(chield);
        }

    }
});

module.exports = HActionbar;
