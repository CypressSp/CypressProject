export const ClickElement = (path) =>    {
    cy.get(path, { timeout: 10000 }).should('be.visible')
    cy.get(path).click()
}

export const TypeInput = (path,data) =>    {
    cy.get(path, { timeout: 10000 }).should('be.visible')
    cy.get(path).type(data)
}

export const Dropdown_Select = (path,data) =>    {
    cy.get(path, { timeout: 10000 }).should('be.visible')
    cy.get(path).select(data)
}

export const Click_Checkbox = (path) =>    {
    cy.get(path, { timeout: 10000 }).should('be.visible')
    cy.get(path).check()
}

export const Checkout = () =>    {
    
    //ViewInCart
    // ClickElement('.shop-menu > .nav > :nth-child(3) > a')
    // cy.wait(3000)
    // cy.get('#cart_info_table').should('exist')

    //checkout
    cy.get('.btn.btn-default.check_out').should('exist')
    ClickElement('.btn.btn-default.check_out')

    cy.get('.btn.btn-success.close-checkout-modal.btn-block').should('exist')
    // cy.get('.btn.btn-success.close-checkout-modal.btn-block').trigger("click")
}

export const iFrameMethod = (iFrameBody) =>    {
    cy.get(iFrameBody)
    .its('0.contentDocument.body').should('not.be.empty').then(() => {
        return(cy.wrap())
    })
}