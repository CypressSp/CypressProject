const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");

describe('datejs_fakerjs Validation',function() {

  beforeEach(() => {

    cy.visit('https://vinothqaacademy.com/demo-site/')
  })

  it('datejs_fakerjs', () => {

    const date = '1998-01-23'
    const randDate = dayjs(date).format("MM/DD/YYYY")
    const fname = faker.person.firstName()
    const lname = faker.person.lastName()
    const email = faker.internet.email()

    cy.get('#vfb-5').type(fname)
    cy.log("fname: "+fname)
    cy.get('#vfb-7').type(lname)
    cy.log("lname: "+lname)
    cy.get('#vfb-31-1').click()
    cy.get('#vfb-14').type(email)
    cy.log("email: "+email)
    cy.get('#vfb-18').type(randDate)
    cy.log("Date: "+randDate)
    cy.get('#vfb-3').type('33')
    cy.get('#vfb-4').click()

    cy.wait(5000)
    cy.get('#messageContainer').contains('Successfully Submitted')
  })
})