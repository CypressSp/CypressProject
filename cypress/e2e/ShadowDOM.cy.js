describe('ShadowDOM Validation',function() {

    beforeEach(() => {
  
      cy.visit('https://practice.expandtesting.com/shadowdom')
    })
  
    it('ShadowDOM', () => {
      
        //Usual Button
        cy.get('.btn.btn-primary.mb-2').should('be.visible')

        //Shadow Button
        cy.get('#shadow-host').shadow().find('button').should('have.text','This button is inside a Shadow DOM.')
    })
  })