///<reference types ="cypress"/>
import HomePage from "../MyProject/PageObject/HomePage"
import ProductPage from "../MyProject/PageObject/ProductPage"

describe('Test Suite', () => {

    before(function() {
        cy.fixture('example').then( function (data)
        {
            globalThis.data=data;
        })
        
      })

    it('Visit page', ()=>{
        const homepage=new HomePage()
        const productpage = new ProductPage()
        //cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.visit(Cypress.env('url'))


        homepage.getEditBox().type(globalThis.data.name)  
        homepage.getGender().select(globalThis.data.gender) 
        homepage.getTwoWayDataBinding().should("have.value", globalThis.data.name)
        homepage.getEditBox().type(globalThis.data.name).should("have.attr","minlength","2")
        homepage.getEnterp().should("be.disabled")
     
           // cy.pause()
        productpage.getAddButton().click()
        globalThis.data.productname.forEach(function(element) {
                cy.SelectProduct(element)   
            })
        productpage.getCheckout().click()
                                                 
    })

})
