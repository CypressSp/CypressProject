
describe('Occurance Validation',function() {

    var inp="Men"

  it('Occurance Validation', () => {
    //Search
    cy.visit('/products?search=Men')
    // cy.get('.form-control.input-lg').type(inp)
    // cy.get('.btn.btn-default.btn-lg').click()

    //Occurance
    cy.get('.single-products > div > p').should(($lis) =>{
      expect($lis).contain(inp)
    })
    
    
    cy.get('.single-products > div > p').should(($lis) =>{
      // expect($lis).to.deep.equal('Men Tshirt')
      expect($lis.text()).to.equal('Men Tshirt')
    })
  }) 
})