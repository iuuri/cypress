/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
      //.first() //primeiro item da lista 
      //.last() //ultimo item da lista
      //.eq(3) //3º item da lista 
      .contains('Aether Gym Pant') //buscar um produto pelo nome
      .click()

  });

  it.only('Deve adicionar um produto ao carrinho', () => {
    var quantidade = 10

    cy.get('[class="product-block grid"]')
      .eq(1).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear() // limpar o campo antes de digitar 
      .type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.') //concatenar variavel com string 
  });

});