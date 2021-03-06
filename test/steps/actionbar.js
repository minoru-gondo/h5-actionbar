module.exports = function (library, expect, h5_test) {
    library
        .given('que eu tenho uma barra de ações com as ações ([^\u0000]*)', function (estado, next) {
            expect(estado, 'estado').to.be.an('string');
            h5_test.replace('___mock___', estado);
            next();

        })
        .when('eu renderizar o actionbar', function (next) {
            h5_test.file('app/actionbar.view.js');
            h5_test.serve('app/index.html');
            h5_test.pack('app', next);
        })
        .when('eu clicar no icone do menudropdown', function (next) {
            h5_test.run('test/clickIcon.js');
            next();
        })
        .then('deverá ser exibido ([^\u0000]*)', function (spec, next) {
            expect(spec).to.be.an('string');
            h5_test.replace('___spec___', spec.replace(/\n/g, '\n    '));
            h5_test.check('test/teste_inicial.spec');
            next();
        })
        .given('se for necessário exibirá ([^\u0000]*)', function (menudropdown, next) {
            expect(menudropdown, 'menudropdown').to.be.an('string');
            h5_test.replace('___menudropdown___', menudropdown);
            next();
        })
};





//
//module.exports = function (library, expect, h5_test) {
//    library
//        .given('que eu tenho uma ação com o ([^\u0000]*)', function (estado, next) {
//            expect(estado, 'estado').to.be.an('string');
//            h5_test.replace('___mock___', estado);
//            next();
//
//        })
//        .when('eu renderizar o action', function (next) {
//            h5_test.file('app/action.view.js');
//            h5_test.serve('app/index.html');
//            h5_test.pack('app', next);
//        })
//        .when('clicar no botão', function (next) {
//            h5_test.pack('app', next);
//            h5_test.run('test/click.js');
//        })
//        .then('deverá ser exibido ([^\u0000]*)', function (spec, next) {
//            expect(spec).to.be.an('string');
//            h5_test.replace('___specSalvar___', spec);
//            h5_test.check('test/teste_inicial.spec');
//            next();
//        })
//        .then('o titulo será ([^\u0000]*)', function (titulo, next) {
//            if (titulo) {
//                h5_test.replace('___titulo___', titulo);
//                h5_test.run('test/check_titulo.js');
//            }
//            next();
//        });
//};
