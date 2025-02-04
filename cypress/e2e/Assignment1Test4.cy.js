import { iFrameMethod } from "../support/CommonFunctions"

describe('iFrame Validation',function() {

    beforeEach(() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    it('Switch tab example', () => {
  
        cy.get('a[class="btn-style class1 class2"]').invoke("attr", "target", "_self").click()
        cy.on('uncaught:exception', (e) => {
            if (e.message.includes('Things went bad')) {
             
              return false
            }
        })

        cy.url().should('eq','https://www.qaclickacademy.com/')
    }) 

    it('Switch to Alert Example', () => {

        let inp = 'Sp'

        cy.get('.pull-right > #name').type(inp)
        cy.get('#alertbtn').click()

        cy.on('window:alert',(text) => {

            expect(text).contain('Hello '+inp+', share this practice page and share your knowledge')
        })
    })

  it('iFrame Mentorship Access', () => {

    cy.get('iframe#courses-iframe').its('0.contentDocument.body').should('not.be.empty').then((frame) => {
        cy.wrap(frame).as('fBody')
        cy.get('@fBody').find('div.nav-outer.clearfix > nav > div.navbar-collapse.collapse.clearfix > ul > li:nth-child(5) > a')
        .should('be.visible').click()
    })

    cy.get('iframe#courses-iframe').its('0.contentDocument.body')
    .find('.inner-box > h1').should('be.visible').contains('Mentorship')
  })
})