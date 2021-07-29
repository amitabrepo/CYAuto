import HomePage from "../../../MyProject/PageObject/HomePage"
import ProductPage from "../../../MyProject/PageObject/ProductPage"

import { Given,When,Then } from "cypress-cucumber-preprocessor/steps"

const homepage=new HomePage()        
const productpage = new ProductPage()

Given ('I open eCommerce page',()=>
{
    cy.visit(Cypress.env('url'))
})

When ('I add items to cart',function()
{
    productpage.getAddButton().click()
    globalThis.data.productname.forEach(function(element) {
            cy.SelectProduct(element)   
        })

})

Then ('I click can checkout',()=>
{
    productpage.getCheckout().click()
})



