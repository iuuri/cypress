// importar as dependencias do cypress\\
/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

//criar um bloco de contexto\\
context("Funcionalidade Login", () => {

  //utilizando hooks para diminuir linhas 
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/my-account/")
  });

  afterEach(() => {
    cy.screenshot()
  });


  //criar cenarios de teste\\
  it("Deve fazer login com sucesso", () => {
    //colocar ações que devem ser executadas\\
    //Testes realizados com dados fixos\\

    cy.get('#username').type('aluno_ebac15@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    //metodo de verificação de teste esperado\\
    cy.get('a > .hidden-xs').should('contain', 'Welcome')

  });

  it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('a > .hidden-xs').should('contain', 'Welcome')
  });

  it('Deve fazer login com sucesso - Usando fixture', () => {
    cy.fixture('perfil').then(dados =>{
    cy.get('#username').type(dados.usuario)
    cy.get('#password').type(dados.senha, {log:false}) //utilizar {log:false} para esconder a senha ou algum dado\\ 
    cy.get('.woocommerce-form > .button').click()
    cy.get('a > .hidden-xs').should('contain', 'Welcome')
    })


  });

  it("Deve exibir uma mensagem ao inserir usuario invalido", () => {


    cy.get('#username').type('usuarioinvalido@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
  });

  it("Deve exibir uma mensagem ao inserir senha invalida", () => {


    cy.get('#username').type('aluno_ebac15@teste.com')
    cy.get('#password').type('senhaincorreta')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac15@teste.com está incorreta. Perdeu a senha?')
  });
});
