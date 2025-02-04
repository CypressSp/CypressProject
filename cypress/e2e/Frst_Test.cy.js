// import usrdata from "../fixtures/signUpDetails.json"
import '../support/commands'
import '../support/Locators'
import {ClickElement, TypeInput, Dropdown_Select, Click_Checkbox} from '../support/CommonFunctions'
import Locators from "../support/Locators"

describe('Cypress Test Validation',function() {

  
  
  beforeEach(() => {

    cy.fixture("../fixtures/signUpDetails.json").then(function(tstdataobj) {
        
      this.tstdataobj = tstdataobj  
    })
  })

  var numb=Math.floor(Math.random() * 9999)+1000

  it('Launch URL', () => {

    cy.visit('/')
    // cy.get('.title.text-center').contains('Features Items')
  }) 

  it('User Signup & Logout', function() {

    // var numb=Math.floor(Math.random() * 9999)+1000
    var email="dummy"+this.tstdataobj.uname+numb+"@mail.com"

    cy.visit('/login')
    cy.wait(2000)
    TypeInput(Locators.SignUp_Name,this.tstdataobj.uname+numb)
    TypeInput(Locators.SignUp_Email,email)
    ClickElement(Locators.SignUp_Button)
  
    //Entering Account Information
    ClickElement(Locators.Title_Mr)
    TypeInput(Locators.PasswordField,this.tstdataobj.pwd)
    Dropdown_Select(Locators.Calender_Date,this.tstdataobj.date)
    Dropdown_Select(Locators.Calender_Month,this.tstdataobj.month)
    Dropdown_Select(Locators.Calender_Year,this.tstdataobj.year)
    Click_Checkbox(Locators.Newsletter_Checkbox)
    Click_Checkbox(Locators.SpecialOffer_Checkbox)

    //Entering Address Information
    TypeInput(Locators.FirstName,this.tstdataobj.uname)
    TypeInput(Locators.LastName,numb)
    TypeInput(Locators.Company,this.tstdataobj.Company_Name)
    TypeInput(Locators.Address1,this.tstdataobj.AddressInput)
    Dropdown_Select(Locators.Country_Drd,this.tstdataobj.CountryVal)
    TypeInput(Locators.State,this.tstdataobj.StateVal)
    TypeInput(Locators.City,this.tstdataobj.CityVal)
    TypeInput(Locators.Zipcode,this.tstdataobj.ZipcodeVal)
    TypeInput(Locators.Mobile,this.tstdataobj.MobileNum)
    cy.get(Locators.CreateAccount_Button).contains('Create Account').click()

    //Successful Account Creation Validation
    cy.get(Locators.AccountCreated_Val).contains('Account Created!')

    //Login & Logout
    cy.visit('/login')
    ClickElement(Locators.Logout)
  })

  it('AddToCart', () => {

    cy.visit('/products')
    ClickElement(Locators.Add2Cart_Btn)
    cy.get(Locators.Continue_Shopping).trigger("click")
    cy.wait(3000)

    //ViewInCart
    ClickElement(Locators.View_Cart)
    cy.get('#product-1').should('exist')
  })

  it('Login Again for Deletion', () => {
    
    // cy.visit('/login')
    cy.fixture("signUpDetails").then((tstdata) => {
      
      var email="dummy"+tstdata.uname+numb+"@mail.com"
      cy.usrlogin(email, tstdata.pwd)
    })

    cy.usrDelete()
  })

  it('Valid & Invalid Login', () => {
    cy.visit('/login')
    cy.fixture("signUpDetails").then((tstdata) => {
      cy.usrlogin(tstdata["LoginCreds"]["ValidCreds"]["validEmail"], 
        tstdata["LoginCreds"]["ValidCreds"]["validPwd"])
    })

    cy.get(Locators.Logout).should('exist')
    cy.intercept('GET','/logout').as('logoutCheck')
    cy.get(Locators.Logout).click()
    cy.wait('@logoutCheck')

    cy.wait(2000)

    cy.visit('/login')
    cy.fixture("signUpDetails").then((tstdata) => {
      cy.usrlogin(tstdata["LoginCreds"]["InvalidCreds"]["invalidEmail"], 
        tstdata["LoginCreds"]["InvalidCreds"]["invalidPwd"])

      cy.get('[action="/login"] > p').invoke('text').
      should('equal', tstdata.Invalid_Login_Text)
    })
    
  })
})