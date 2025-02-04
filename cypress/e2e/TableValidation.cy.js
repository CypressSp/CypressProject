import { get } from "http"

describe('Table Validation',function() {

  it('Validation', () => {
    //Search
    cy.visit('https://www.w3schools.com/html/html_tables.asp')
    cy.get('#customers > tbody').contains('th','Company')

    cy.get('#customers > tbody').find('tr:eq(2)','Maria Anders').should('be.visible')
  }) 
})