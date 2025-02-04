import usrdata from "../fixtures/signUpDetails.json"
import {ClickElement} from '../support/CommonFunctions'
import Locators from "../support/Locators"

describe('Login Validation with Sessions',function() {

    

    beforeEach(() => {

        cy.LoginWithSession(usrdata["LoginCreds"]["ValidCreds"]["validEmail"], 
            usrdata["LoginCreds"]["ValidCreds"]["validPwd"])
    })

    it('Add products to cart', () => {

        cy.visit('/products')
        cy.get('.form-control.input-lg').type('Men')
        cy.get('.btn.btn-default.btn-lg').click()

        let pVal = ''

        cy.log('1: '+pVal)

        cy.get('.features_items > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > p').invoke('text').then((val) => {

            this.pVal = val.toString()
            // cy.log('2: '+pVal)
            return pVal
        })

        cy.log('3: '+pVal)

        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').then((bn) => {
            cy.get(bn).trigger('mouseover')
            cy.get(bn).click()
        })

        cy.get('.modal-footer > .btn').trigger("click")
        cy.wait(2000)

        cy.get('.nav.navbar-nav > li:nth-child(3) > a').click()

        cy.get('.cart_description > h4 > a').should('equals', pVal)

        cy.get('.btn.btn-default.check_out').should('be.visible').click()

        cy.get('.btn.btn-success.close-checkout-modal.btn-block').should('exist').trigger("click")

        // cy.get('.btn.btn-default.check_out').should('be.visible').click()
        

        cy.request({
            method : "GET",
            url : "https://automationexercise.com/checkout"
        }).then((resp) => {
            const jsData = JSON.parse(resp.body)
            expect(jsData.responseCode).to.be.equal(200)
            // expect(jsData.products[0].category.usertype.usertype).to.be.equal('Women')
        })
    })
}) 