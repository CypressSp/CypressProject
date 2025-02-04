import Locators from "../support/Locators"
import tstdata from "../fixtures/signUpDetails.json"

describe('Invalid Login Validation',function() {

    it('Invalid User Login', () => {

        
        cy.visit('/login')
        cy.get(Locators.Login_Email).click().clear().type('randomuser@mail.com')
        cy.get(Locators.Login_Password).click().clear().type(tstdata["LoginCreds"]["ValidCreds"]["validPwd"])
        cy.get(Locators.Login_Button).click()

        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('something about the error')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            done()
        
            // return false to prevent the error from
            // failing this test
            return false
        })

        // cy.get(Locators.Logout).contains('Logout')
        // .catch((err) => {
            
        //     cy.get(Locators.Login_Msg).should('have.text','Your email or password is incorrect!')
        // })
    })
  })