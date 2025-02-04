// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import {ClickElement} from '../support/CommonFunctions'
import Locators from "../support/Locators"

Cypress.Commands.add('usrlogin', (email, password) => {
    cy.visit('/login')
    cy.intercept('POST','/login').as('loginCheck')
    cy.get(Locators.Login_Email).type(email)
    cy.get(Locators.Login_Password).type(password)
    cy.get(Locators.Login_Button).click()
    cy.wait('@loginCheck')
})

Cypress.Commands.add('usrDelete', () => {
   
    //Delete Account
    ClickElement(Locators.Delete_Account)
    cy.get('.title.text-center').contains('Account Deleted!').should('exist')
})

Cypress.Commands.add('LoginWithSession', (email, password) => {
   
    cy.session([email, password],() => {
        cy.visit('/')
        cy.visit('/login')
        cy.intercept('POST','/login').as('loginCheck')
        cy.get(Locators.Login_Email).type(email)
        cy.get(Locators.Login_Password).type(password)
        cy.get(Locators.Login_Button).click()
        cy.wait('@loginCheck')
    })
})

Cypress.Commands.add('Add2CartSession', (Inpt) => {
   
    cy.session(Inpt,() => {
        cy.visit('/products')
        cy.get('.form-control.input-lg').type(Inpt)
        cy.get('.btn.btn-default.btn-lg').click()

        //Add2Cart
        ClickElement(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
        cy.get('.modal-footer > .btn').trigger("click")
        cy.wait(2000)

        ClickElement(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn')
        cy.get('.modal-footer > .btn').trigger("click")
        cy.wait(2000)
    })
})

Cypress.Commands.add('Add1ToCartSession', (Inpt) => {
   
    cy.session(Inpt,() => {
        cy.visit('/products')
        cy.get('.form-control.input-lg').type(Inpt)
        cy.get('.btn.btn-default.btn-lg').click()

        //Add2Cart
        ClickElement(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
        cy.get('.modal-footer > .btn').trigger("click")
        cy.wait(2000)
    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })