import Locators from "../support/Locators"
import tstdata from "../fixtures/signUpDetails.json"

class Login{

    URLNavigation_Login(){

        cy.visit('/login')
    }

    InvalidUser_Login(){

        this.URLNavigation_Login()
        cy.get(Locators.Login_Email).click().clear().type('randomuser@mail.com')
        cy.get(Locators.Login_Password).click().clear().type(tstdata["LoginCreds"]["ValidCreds"]["validPwd"])
        cy.get(Locators.Login_Button).click()
        cy.get(Locators.Login_Msg).should('have.text','Your email or password is incorrect!')
    }

    InvalidPwd_Login(){

        this.URLNavigation_Login()
        cy.get(Locators.Login_Email).click().clear().type(tstdata["LoginCreds"]["ValidCreds"]["validEmail"])
        cy.get(Locators.Login_Password).click().clear().type('InvalidPwd')
        cy.get(Locators.Login_Button).click()
        cy.get(Locators.Login_Msg).should('have.text','Your email or password is incorrect!')
    }

    Valid_Login(){

        this.URLNavigation_Login()
        cy.get(Locators.Login_Email).click().clear().type(tstdata["LoginCreds"]["ValidCreds"]["validEmail"])
        cy.get(Locators.Login_Password).click().clear().type(tstdata["LoginCreds"]["ValidCreds"]["validPwd"])
        cy.get(Locators.Login_Button).click()
        cy.get(Locators.Logout).should('be.visible')
    }

    Valid_Login_Keyboard(){

        this.URLNavigation_Login()
        cy.get(Locators.Login_Email).click().clear().type(tstdata["LoginCreds"]["ValidCreds"]["validEmail"])
        .tab().type(tstdata["LoginCreds"]["ValidCreds"]["validPwd"]+'{enter}')
        
        cy.get(Locators.Logout).should('be.visible')
    }

    SwagLabs_Login(url_inp){

        cy.visit(url_inp)
        cy.get(Locators.Swag_Uname).type(tstdata.Swag_Uname_Inp)
        cy.get(Locators.Swag_Pwd).type(tstdata.Swag_Pwd_Inp)
        cy.get(Locators.Swag_Login_Button).click()
        cy.get(Locators.Swag_HomePage_Val).should('be.visible')

        cy.wait(3000)
        cy.on('window:alert',(text) => {

            // expect(text).contain('I am a JS Alert')
        })
    }

    Product_Sort_and_Order(){

    cy.get('.product_sort_container').select('lohi')
    cy.get('.inventory_item_price').then(($prices) => {
        expect($prices.length).to.be.greaterThan(1)
        cy.wrap($prices).each((price,index,prices) => {
            if(index < prices.length - 1){
                const currenttext = cy.wrap(price).invoke('text')
                const nexttext = cy.wrap(prices[index + 1]).invoke('text')

                cy.wrap(price).invoke('text').then((currenttext) => {
                    cy.wrap(prices[index + 1]).invoke('text').then((nexttext) => {
                        const crntprice = parseFloat(currenttext.replace('$',''))
                        const nxtprice = parseFloat(nexttext.replace('$',''))

                        if(nxtprice >= crntprice){
                            cy.log('Pass: The products are ordered as requested')

                        }else{
                            cy.log('Fail: The products are not ordered as requested')
                        }
                    })
                })
            }
        })
    })
    }

    Exception_Handle(){
        cy.on('uncaught:exception', (e) => {
                
            return false
        })
    }
}

export default Login;