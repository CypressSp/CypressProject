import {Checkout} from '../support/CommonFunctions'

describe('Add2Cart_Session Validation',function() {

  beforeEach(() => {

    var inp="Men"

    cy.Add2CartSession(inp)
  })

  it('View_Cart & Checkout', () => {
    
    cy.visit('/view_cart')
    
    //checkout
    Checkout()
  })
})