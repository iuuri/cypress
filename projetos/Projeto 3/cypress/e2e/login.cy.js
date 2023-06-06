///<reference types="cypress" />

context('Funcionalidade Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('http://automationpractice.pl/index.php')
   
  });

  it('Deve exibir mensagem de erro ao inserir usuario incorreto', () => {
    
  });

  it('Deve exibir mensagem de erro ao inserir senha incorreta', () => {
    
  });

  it('Deve exibir mensagem de erro ao tentar fazer login sem preencher dados ao formulario de login ', () => {
    
  });

});