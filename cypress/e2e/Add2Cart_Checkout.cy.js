import {ClickElement, Checkout} from '../support/CommonFunctions'

describe('Add2Cart_Checkout Validation',function() {

    var inp="Men"

  it('Add2Cart_Checkout Validation', () => {
   
    cy.visit('/products')
    cy.get('.form-control.input-lg').type(inp)
    cy.get('.btn.btn-default.btn-lg').click()

    //Add2Cart
    ClickElement(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
    cy.get('.modal-footer > .btn').trigger("click")
    cy.wait(2000)

    ClickElement(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn')
    cy.get('.modal-footer > .btn').trigger("click")
    cy.wait(2000)

    // Checkout()
  }) 

  it('Checkout Validation', () => {

    cy.visit('/view_cart')
    
    Checkout()
  })
})