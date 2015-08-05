this.Page = $page('value', {
nome: 'input.nome',
btn_nome: 'button.muda_nome'
});

var page = new Page(driver);
page.nome.typeText('___nome___');
page.btn_nome.click();
var nome = page.nome.attribute('value');
var btn = page.btn_nome.getText();
if(nome != '___nome___')
    throw "O texto deveria ser ___nome___ mas está " + nome;
if(btn != '___nome___')
    throw "O nome do botão deveria ser ___nome___ mas está " + btn;
