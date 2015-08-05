  Funcionalidade: Ações da view
  Para permitir ao usuário escolher uma entre várias ações
  Eu, como programador
  Desejo utilizar o componente h5-actionbar


  Cenário: Tela de paciente, situação: [situacao]
  Dado que eu tenho uma barra de ações com as ações [estado]
  Quando eu renderizar o actionbar
  Então deverá ser exibido [spec]
  E o novo nome do action será [nome]

  # ações : salvar, voltar, tirar foto, agendar e excluir
  #  E os actions mais importantes serão renderizados do lado inferior a direita no [desktop]
  #  E os actions menos importantes serão renderizados do lado inferior a esquerda no [desktop]
  #  Mas se os actions menos importantes forem mais de 3
  #  Então serão transformados num menu
  #  E os actions mais importantes serão renderizadas inferior a direita no [mobile]
  #  E os actions menos importantes serão transformadas num menu no [mobile]
  #  E não terá hintText nos actions do [mobile]


  Exemplos:

    situacao                                                         | estado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | spec                                     | nome
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Actionbar vazio                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | actionbar:                               |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   inside partly div                      |
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Actionbar com botão primary                                      | salvar: {labelText:'Salvar', mode: 'visible', kind: 'primary', run: salva_info, hintText: 'Salvar dados do paciente'}                                                                                                                                                                                                                                                                                                                                                                                                                                    | btn_primary:                             |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   inside actionbar                       |
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Actionbar com botão secondary                                    | voltar: {labelText:'Voltar', mode: 'visible', kind: 'secondary', hintText: 'Sair da tela de edição do paciente'}                                                                                                                                                                                                                                                                                                                                                                                                                                         | btn_secondary:                           |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   inside actionbar                       |
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Actionbar com botão tertiary                                     | tirar_foto: {labelText:'Tirar Foto', mode: 'visible', kind: 'tertiary', hintText: 'Tirar foto do paciente'}                                                                                                                                                                                                                                                                                                                                                                                                                                              | btn_tertiary:                            |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   inside actionbar                       |
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Actionbar com botão normal                                       | agendar: {labelText:'Agendar', mode: 'visible', kind: 'normal', hintText: 'Agendar consulta do paciente'}                                                                                                                                                                                                                                                                                                                                                                                                                                                | btn_normal:                              |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   inside actionbar                       |
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Actionbar com botão de kind vazio                                | excluir: {labelText:'Excluir', mode: 'visible', kind: '', hintText: 'Excluir paciente'}                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | btn_vazio:                               |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   inside actionbar                       |
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Actionbar com botão primary e secondary                          | salvar: {labelText:'Salvar', mode: 'visible', kind: 'primary', run: salva_info, hintText: 'Salvar dados do paciente'}, voltar: {labelText:'Voltar', mode: 'visible', kind: 'secondary', hintText: 'Sair da tela de edição do paciente'}                                                                                                                                                                                                                                                                                                                  | btn_secondary:                           |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   left-of btn_primary                    |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   aligned horizontally all btn_primary   |
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Actionbar com botão primary, secondary e tertiary                | salvar: {labelText:'Salvar', mode: 'visible', kind: 'primary', run: salva_info, hintText: 'Salvar dados do paciente'}, voltar: {labelText:'Voltar', mode: 'visible', kind: 'secondary', hintText: 'Sair da tela de edição do paciente'}, tirar_foto: {labelText:'Tirar Foto', mode: 'visible', kind: 'tertiary', hintText: 'Tirar foto do paciente'}                                                                                                                                                                                                     | btn_tertiary:                            |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   left-of btn_secondary                  |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   left-of btn_primary                    |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   aligned horizontally all btn_primary   |
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Actionbar com botão primary, secondary, tertiary e normal        | salvar: {labelText:'Salvar', mode: 'visible', kind: 'primary', run: salva_info, hintText: 'Salvar dados do paciente'}, voltar: {labelText:'Voltar', mode: 'visible', kind: 'secondary', hintText: 'Sair da tela de edição do paciente'}, tirar_foto: {labelText:'Tirar Foto', mode: 'visible', kind: 'tertiary', hintText: 'Tirar foto do paciente'}, agendar: {labelText:'Agendar', mode: 'visible', kind: 'normal', hintText: 'Agendar consulta do paciente'}                                                                                          | btn_normal:                              |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   right-of btn_tertiary                  |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   aligned horizontally all btn_secondary |
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Actionbar com botão primary, secondary, tertiary, normal e vazio | salvar: {labelText:'Salvar', mode: 'visible', kind: 'primary', run: salva_info, hintText: 'Salvar dados do paciente'}, voltar: {labelText:'Voltar', mode: 'visible', kind: 'secondary', hintText: 'Sair da tela de edição do paciente'}, tirar_foto: {labelText:'Tirar Foto', mode: 'visible', kind: 'tertiary', hintText: 'Tirar foto do paciente'}, agendar: {labelText:'Agendar', mode: 'visible', kind: 'normal', hintText: 'Agendar consulta do paciente'}, excluir: {labelText:'Excluir', mode: 'visible', kind: '', hintText: 'Excluir paciente'} | btn_vazio:                               |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   right-of btn_tertiary                  |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   aligned horizontally all btn_primary   |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                          |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                          |
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Action que muda seu labelText pelo input do nome                 | muda_nome: {labelText:'Troca nome', mode: 'visible', kind: 'primary', run: pega_dados_troca_nome, hintText: 'Troca nome do botão'}                                                                                                                                                                                                                                                                                                                                                                                                                       | btn_muda:                                | OK
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   inside actionbar                       |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                          |
                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                          |






#      salvar: {
#        labelText:'Salvar',
#        mode: 'visible',
#        kind: 'primary',
#        run: salva_info,
#        hintText: 'Salvar dados do paciente'
#      },
#      voltar: {
#        labelText:'Voltar',
#        mode: 'visible',
#        kind: 'secondary',
#        hintText: 'Sair da tela de edição do paciente'
#      },
#      tirar_foto: {
#        labelText:'Tirar Foto',
#        mode: 'visible',
#        kind: 'tertiary',
#        hintText: 'Tirar foto do paciente'
#      },
#      agendar: {
#        labelText:'Agendar',
#        mode: 'visible',
#        kind: 'normal',
#        hintText: 'Agendar consulta do paciente'
#      },
#      excluir: {
#        labelText:'Excluir',
#        mode: 'visible',
#        kind: '',
#        hintText: 'Excluir paciente'
#      }


#  Exemplo:
#
#  {fotografar: {
#  labelText:'Tirar Foto',
#  mode: 'Não foi detectado nenhum dispositivo fotográfico',
#  kind: normal
#  run: exec_cam(),
#  hintText: 'Tirar foto do paciente',
#  shortcut: key
#  },
#  agendar: {
#  labelText:'Agendar',
#  mode: 'visible',
#  kind: normal
#  run: agend_consult(),
#  hintText: 'Agendar consulta do paciente',
#  shortcut: key
#  }}






#Barra de ações
#
#    Usar story.actions
#
#    Exemplo:
#
#       {salvar: {
#            labelText:'',
#            mode: visible ou invisible ou mensagem de erro(desabilitado),
#            kind: primary, secondary, tertiary, normal
#            run: função,
#            hintText: i18n,
#            shortcut: key
#        }}
#
#    Quais ações mais importantes (ex: salvar, cancelar, excluir; Limite: 3 ações)
#    Desktop: Renderizar inferior a direita as ações mais importantes(primary, secondary, tertiary),
#    renderizar inferior a esquerda os botões menos importantes(normal), se for mais de 3, transformar num menu
#    Mobile: Renderizar inferior a direita as ações mais importantes,
#    transformar num menu as ações menos importantes
#
#
#
#  Actionbar:






















