describe('ViewPort & Error Handling Validation',function() {

    it('ViewPort', () => {
      
        cy.viewport('iphone-x')
        cy.visit('/view_cart')

        cy.clearAllCookies()
        cy.clearAllSessionStorage()
    })

    it('Error Handle using cy.on()', () => {
      
        cy.visit('https://www.selenium.dev/')
  
        cy.on('uncaught:exception', (e) => {
                
            return false
        })
        
        cy.clearAllCookies()
        cy.clearAllSessionStorage()
    }) 

    it('Error Handle using cy.on() and click', () => {
      
        // failOnStatusCode: false
        cy.visit('https://www.javatpoint.com/')
  
        cy.on('uncaught:exception', (e) => {
                
            return false
        })

        cy.get('.nav > li:nth-child(4) > a').click()
    })
  })