
describe('Network_Validation',function() {

  it('GET Request Handle', () => {
    
    cy.request({
        method : "GET",
        url : "https://automationexercise.com/api/productsList"
    }).then((resp) => {
        const jsData = JSON.parse(resp.body)
        expect(jsData.responseCode).to.be.equal(200)
        expect(jsData.products[0].category.usertype.usertype).to.be.equal('Women')
    })
  })

  it('POST Request Handle', () => {
    
    cy.request({
        method : "POST",
        url : "https://automationexercise.com/api/searchProduct",
        form:true,
        body:{
            'search_product':'jean'
        }
    }).then((resp) => {
        const jsData = JSON.parse(resp.body)
        expect(jsData.responseCode).to.be.equal(200)
    })
  })

  it('PUT Request Handle', () => {
    
    cy.request({
        method : "PUT",
        url : "https://automationexercise.com/api/updateAccount",
        form:true,
        body:{
            'name':'New Test',
            'email':'testtester@demo.com',
            'password':'admin123'
        }
    }).then((resp) => {
        const jsData = JSON.parse(resp.body)
        cy.log(jsData)
        expect(jsData.responseCode).to.be.equal(200)
    })
  })

  it('DELETE Request Handle', () => {
    
    cy.request({
        method : "DELETE",
        url : "https://automationexercise.com/api/verifyLogin",
        form:true,
        body:{
            
        }
    }).then((resp) => {
        const jsData = JSON.parse(resp.body)
        expect(jsData.responseCode).to.be.equal(405)
    })
  })
})