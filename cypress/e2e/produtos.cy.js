/// <reference types="cypress" />

var faker = require('faker');

describe('Funcionalidade da Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/') //hook
        cy.get('#primary-menu > .menu-item-629 > a').click()
    });

    it('Deve Selecionar um produto da loja', () => {
        cy.get('[class="product-block grid"]')
            .eq(4)
            .click() //sempre que for classe usar o . e # se for ID
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 5
        
        cy.get('[class="product-block grid"]')
        .eq(4)
        .click() 
        cy.wait(1000)
        cy.get('.button-variable-item-32').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Apollo Running Short” foram adicionados no seu carrinho.')

    });

});

//cy.get('.post-3374 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
