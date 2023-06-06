const { should } = require("chai");

describe('Transações', () => {

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app")
    });

    it('Cadastrar uma entrada', () => {
        
        criarTransacao("Freela", 200)

        cy.get("tbody tr td.description").should("have.text", "Freela")
    });

    it('Cadastrar uma saida ', () => {

        criarTransacao("Cinema", -40)

        cy.get("tbody tr td.description").should("have.text", "Cinema")
    });

    it('Excluir transação', () => {

        criarTransacao("Freela", 200)
        criarTransacao("Mesada", 50)

        cy.contains(".description", "Freela").parent().find("img").click()

        cy.get('tbody tr').should("have.length", 1)

    });


});


















function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2023-04-13") //yyyy-mm-dd
        cy.get('button').click()
}