describe('Date Picker Validation',function() {

  it('Date Picker', () => {
    
    cy.visit('https://www.way2automation.com/way2auto_jquery/datepicker/defult1.html')
    
    // cy.get('#birthday').type('11/08/2023').should('have.value','11/08/2023')
    cy.get('.hasDatepicker').click()

    cy.get('.ui-datepicker-calendar > tbody > tr:nth-child(3) > td:nth-child(3) > a').click()
    cy.get('.hasDatepicker').should('have.value','01/14/2025')

    cy.wait(3000)
    cy.get('.hasDatepicker').clear()

    cy.get('.hasDatepicker').type('01/14/2024').should('have.value','01/14/2024')
  })
})