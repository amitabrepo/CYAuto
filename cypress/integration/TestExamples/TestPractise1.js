/// <reference types="Cypress"/>

  describe('Cypress Practise', () => {

    before(function() {
        cy.fixture('example').then(function(data)
        {
        globalThis.data=data
        })

    })

/* COMMENT*/
    it('Visits the AUT page', () => {
      cy.visit('https://rahulshettyacademy.com/angularpractice/')
      cy.get('input[name="name"]:nth-child(2)').type(globalThis.data.name)
      cy.get('select').select(globalThis.data.gender)
    })
  })