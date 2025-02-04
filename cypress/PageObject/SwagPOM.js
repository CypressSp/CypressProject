import Locators from "../support/Locators"
import tstdata from "../fixtures/signUpDetails.json"
const { faker } = require("@faker-js/faker");

class Swag{

    SwagLabs_Login(url_inp){

        cy.visit(url_inp)
        cy.get(Locators.Swag_Uname).type(tstdata.Swag_Uname_Inp)
        cy.get(Locators.Swag_Pwd).type(tstdata.Swag_Pwd_Inp)
        cy.get(Locators.Swag_Login_Button).click()
        cy.get(Locators.Swag_HomePage_Val).should('be.visible')

        cy.wait(5000)
    }

    Product_Sort_and_Order(){

    cy.get(Locators.Swag_Sort_Button).select('lohi')
    cy.get(Locators.Swag_Item_Prices).then(($prices) => {
        cy.wrap($prices).each((price,index,prices) => {
            if(index < prices.length - 1){
                const currenttext = cy.wrap(price).invoke('text')
                const nexttext = cy.wrap(prices[index + 1]).invoke('text')

                cy.wrap(price).invoke('text').then((currenttext) => {
                    cy.wrap(prices[index + 1]).invoke('text').then((nexttext) => {
                        const crntprice = parseFloat(currenttext.replace('$',''))
                        const nxtprice = parseFloat(nexttext.replace('$',''))

                        if(nxtprice >= crntprice){
                            cy.get('div:nth-child('+$prices.length+') > div.pricebar > button')

                        }else{
                            cy.log('Fail: The products are not ordered as requested')
                        }
                    })
                })
            }
        })
    })

    cy.get(Locators.Swag_Cart).click()

    cy.get(Locators.Swag_Checkout).should('be.visible')
    }

    Checkout(){
        cy.get(Locators.Swag_Checkout).click()

        const fname = faker.person.firstName()
        const lname = faker.person.lastName()
        const zCode = faker.location.zipCode()

        cy.get(Locators.sCart_Fname).type(fname)
        cy.get(Locators.sCart_Lname).type(lname)
        cy.get(Locators.sCart_ZipCode).type(zCode)
        cy.get(Locators.sCart_Continue).click()

        cy.get(Locators.sCart_Finish).should('be.visible')
        cy.get(Locators.sCart_Finish).click()

        cy.get(Locators.sCart_Success).should('be.visible')
        cy.get(Locators.sCart_Success).should('have.text','THANK YOU FOR YOUR ORDER')
    }
}

export default Swag;