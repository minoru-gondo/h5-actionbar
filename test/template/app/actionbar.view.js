var React = require('react');
var H5ActionBar = require('../../../src/actionbar.js');

window.hsession = {
    language: 'pt_br'
};

var mock_store = {
  salvar: {
    labelText:'Salvar',
    mode: 'visible',
    kind: 'primary',
    run: salva_info,
    hintText: 'Salvar dados do paciente'
  },
  voltar: {
    labelText:'Voltar',
    mode: 'visible',
    kind: 'secondary',
    hintText: 'Sair da tela de edição do paciente'
  },
  tirar_foto: {
    labelText:'Tirar Foto',
    mode: 'visible',
    kind: 'normal',
    hintText: 'Tirar foto do paciente'
  },
  excluir: {
    labelText:'Excluir',
    mode: 'visible',
    kind: 'normal',
    hintText: 'Excluir paciente'
  }
};

function salva_info(){

 mock_store.salvar.labelText = 'Salvo'

};

var AppAction = React.createClass({
    render: function () {
        return React.createElement(H5ActionBar, {
            store: mock_store
        });
    }
});



React.render(<AppAction/>, document.body);
