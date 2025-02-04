describe('Order Validation',function() {

  it('Validation', () => {
    //Search
    cy.visit('https://www.saucedemo.com/v1/inventory.html')
    
    cy.get('.product_sort_container').select('lohi')
    cy.get('.inventory_item_price').then(($prices) => {
        expect($prices.length).to.be.greaterThan(1)
        cy.wrap($prices).each((price,index,prices) => {
            if(index < prices.length - 1){
                const currenttext = cy.wrap(price).invoke('text')
                const nexttext = cy.wrap(prices[index + 1]).invoke('text')

                cy.wrap(price).invoke('text').then((currenttext) => {
                    cy.wrap(prices[index + 1]).invoke('text').then((nexttext) => {
                        const crntprice = parseFloat(currenttext.replace('$',''))
                        const nxtprice = parseFloat(nexttext.replace('$',''))

                        if(nxtprice >= crntprice){
                            cy.log('Pass: The products are ordered as requested')

                        }else{
                            cy.log('Fail: The products are not ordered as requested')
                        }
                    })
                })
            }
        })
    })
  }) 
})