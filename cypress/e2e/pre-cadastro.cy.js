/// <reference types="cypress" />

    var faker = require ('faker');


beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/') //hook
    cy.get('.icon-user-unfollow').click()
});

describe('Funcionalidade Pré Cadastro', () => {
    
    it('Deve completar o pré cadastro com sucesso', () => {
        var emailFaker = faker.internet.email()
        var senhaFaker = faker.internet.password()
        var nomeFaker = faker.name.firstName()
        var sobrenomeFaker = faker.name.lastName()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(senhaFaker)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')

    });



});