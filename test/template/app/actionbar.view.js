var React = require('react');
var H5ActionBar = require('../../../src/actionbar.js');

window.hsession = {
    language: 'pt_br'
};

var mock_store = {
 actions: {
     ___mock___
  }
};

function salva_info(){

 mock_store.actions.salvar.labelText = 'Salvo'

};

var AppAction = React.createClass({
    render: function () {
        return React.createElement(H5ActionBar, {
            store: mock_store
        });
    }
});



React.render(<AppAction/>, document.getElementById('app'));
