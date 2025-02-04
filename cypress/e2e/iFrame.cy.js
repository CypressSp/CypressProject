import { iFrameMethod } from "../support/CommonFunctions"

describe('iFrame Validation',function() {

  it('iFrame Basic Access', () => {
    
    cy.visit('https://jqueryui.com/droppable/')
    cy.get('iframe.demo-frame').its('0.contentDocument.body').find('#draggable')
  })

  it('iFrame with wrap', () => {

    cy.visit('https://jqueryui.com/droppable/')
    cy.get('iframe.demo-frame').its('0.contentDocument.body').should('not.be.empty').then((frame) => {
        cy.wrap(frame).as('fBody')
        cy.get('@fBody').find('#droppable > p').should('have.text','Drop here')
    })
  })

  it.skip('iFrame with custom Commands', () => {

    cy.visit('https://jqueryui.com/droppable/')

    iFrameMethod('iframe.demo-frame').within(() =>{
        cy.find('#droppable > p').should('not.be.empty')
        // cy.find('#droppable > p').should('have.text','Drop here')
    })
  })

  it('iFrame using package', () => {

    cy.visit('https://demo.automationtesting.in/Frames.html')
 
    cy.frameLoaded('#singleframe').then(($iframe) => {
        const $body = $iframe.contents().find('body')

cy.wrap($body)
    .find('.col-xs-6.col-xs-offset-5 > input')
    .type('Hello')

})
  })
})