describe('Add2Cart_Session Validation',function() {

  it('View_Cart & Checkout', () => {
    
    cy.visit('/login')
    
    cy.xpath('//*[@data-qa="login-email"]').type('invaliduser@mail.com')
    cy.xpath('//*[@data-qa="login-password"]').type('invalidpwd')
    cy.xpath('//*[@data-qa="login-button"]').click()

    cy.xpath('//*[@class="login-form"]//p').should('have.text','Your email or password is incorrect!')
  })
})