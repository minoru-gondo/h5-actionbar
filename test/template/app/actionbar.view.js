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
//var mock_store = {
// actions: {
//        voltar: {
//            labelText: 'Voltar',
//            mode: 'visible',
//            kind: 'primary',
//            run: function () {
//                alert("OK");
//            },
//            hintText: 'Sair da tela de edição do paciente'
//        },
//        tirar_foto: {
//            labelText: 'Tirar Foto',
//            mode: 'visible',
//            kind: 'tertiary',
//            run: function () {
//                alert("OK");
//            },
//            hintText: 'Tirar foto do paciente'
//        },
//        tirar_foto_1: {
//            labelText: 'Tirar Foto 1',
//            mode: 'visible',
//            kind: 'tertiary',
//            run: function () {
//                alert("OK");
//            },
//            hintText: 'Tirar foto do paciente'
//        },
//        tirar_foto_2: {
//            labelText: 'Tirar Foto 2',
//            mode: 'visible',
//            kind: 'tertiary',
//            run: function () {
//                alert("OK");
//            },
//            hintText: 'Tirar foto do paciente'
//        },
//        tirar_foto_3: {
//            labelText: 'Tirar Foto 3',
//            mode: 'visible',
//            kind: 'tertiary',
//            run: function () {
//                alert("OK");
//            },
//            hintText: 'Tirar foto do paciente'
//        },
//        tirar_foto_4: {
//            labelText: 'Tirar Foto 4',
//            mode: 'visible',
//            kind: 'tertiary',
//            run: function () {
//                alert("OK");
//            },
//            hintText: 'Tirar foto do paciente'
//        },
//        tirar_foto_5: {
//            labelText: 'Tirar Foto 5',
//            mode: 'visible',
//            kind: 'tertiary',
//            run: function () {
//                alert("OK");
//            },
//            hintText: 'Tirar foto do paciente'
//        },
//        tirar_foto_6: {
//            labelText: 'Tirar Foto 6',
//            mode: 'visible',
//            kind: 'tertiary',
//            run: function () {
//                alert("OK");
//            },
//            hintText: 'Tirar foto do paciente'
//        },
//        tirar_foto_7: {
//            labelText: 'Tirar Foto 7',
//            mode: 'visible',
//            kind: 'tertiary',
//            run: function () {
//                alert("OK");
//            },
//            hintText: 'Tirar foto do paciente'
//        },
//        tirar_foto_8: {
//            labelText: 'Tirar Foto 8',
//            mode: 'visible',
//            kind: 'tertiary',
//            run: function () {
//                alert("OK");
//            },
//            hintText: 'Tirar foto do paciente'
//        }
//    }
//};

function salva_info() {

    mock_store.actions.salvar.labelText = 'Salvo'

};

var AppAction = React.createClass({
    render: function () {
        return React.createElement(H5ActionBar, {
            store: mock_store,
            icon: 'fa fa-ellipsis-v fa-2x position_icon_actionbar'
        });
    }
});



React.render(React.createElement(AppAction), document.getElementById('app'));
