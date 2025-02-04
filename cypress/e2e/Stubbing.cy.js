describe('StubbingPost_Limit',function() {

  it('Post_Limit', () => {
   
    // cy.intercept('POST','https://automationexercise.com/api/searchProduct',{'name':'Test_Cypress'}).as('searchProduct')
    cy.intercept('https://automationexercise.com/api/searchProduct').as('searchProduct')
    // cy.get('@searchProduct').its('response.name').should('have.text','Test_Cypress')
    cy.visit('/')
    cy.get('@searchProduct').its('response.statusCode').should('eq','200')
  }) 
})