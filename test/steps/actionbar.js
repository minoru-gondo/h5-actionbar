module.exports = function (library, expect, h5_test) {
    library
        .given('que eu tenho uma ação com o ([^\u0000]*)', function (estado, next) {
            expect(estado, 'estado').to.be.an('string');
            h5_test.replace('___mock___', estado);
            next();

        })
        .when('eu renderizar o actionbar', function (next) {
            h5_test.file('app/actionbar.view.js');
            h5_test.serve('app/index.html');
            h5_test.pack('app', next);
        })
        .then('deverá ser exibido ([^\u0000]*)', function (spec, next) {
            expect(spec).to.be.an('string');
            h5_test.replace('___spec___', spec);
            h5_test.check('test/teste_inicial.spec');
            next();
        })
};
