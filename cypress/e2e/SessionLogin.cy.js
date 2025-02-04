import usrdata from "../fixtures/signUpDetails.json"
import {ClickElement} from '../support/CommonFunctions'
import Locators from "../support/Locators"

describe('Login Validation with Sessions',function() {

    beforeEach(() => {

        cy.LoginWithSession(usrdata["LoginCreds"]["ValidCreds"]["validEmail"], 
            usrdata["LoginCreds"]["ValidCreds"]["validPwd"])
    })

    it('Check if already logged in', () => {

        cy.visit('/')
        cy.get('li > a > .fa.fa-user').should('be.visible').then(() => {
            cy.get('b').invoke('text').should('equal','validuser')
        })
    })

    it('Logout', () => {

        cy.visit('/')
        ClickElement(Locators.Logout)
    })
})  