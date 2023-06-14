/// <reference types="cypress" />

describe('Funcionalidade Login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.login').click()
        cy.get('#email').type('teste1@teste.com')
        cy.get('#passwd').type('teste@teste')
        cy.get('#SubmitLogin > span').click()

        //validação 
        cy.get('.info-account').should('contain' , 'Welcome to your account. Here you can manage all of your personal information and orders.')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.login').click()
        cy.get('#email').type('teste1@teste.com')
        cy.get('#passwd').type('senhainvalida')
        cy.get('#SubmitLogin > span').click()

        //validação 
        cy.get('#center_column > :nth-child(2)').should('contain' , "There is 1 error")
    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.login').click()
        cy.get('#email').type('emailinvalido@teste.com')
        cy.get('#passwd').type('teste@teste')
        cy.get('#SubmitLogin > span').click()

        //validação 
        cy.get('#center_column > :nth-child(2)').should('contain' , "There is 1 error")
    });

    it('Deve exibir uma mensagem erro ao tentar login sem preencher formulario de login', () => {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.login').click()
        cy.get('#SubmitLogin > span').click()

        //validação 
        cy.get('ol > li').should('contain' , "An email address required.")
    });

    
});