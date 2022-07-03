///<reference types ="cypress"/>
//import HomePage from "../../../MyProject/PageObject/HomePage"
//import ProductPage from "../../../MyProject/PageObject/ProductPage"
//CYAuto/cypress/integration/MyProject/PageObject/HomePage.js

import { Given,When,Then } from "cypress-cucumber-preprocessor/steps"

//const homepage=new HomePage()        
//const productpage = new ProductPage()
Given ('I open page',function()
{
    cy.visit("http://automationpractice.com/index.php")
    //cy.visit(Cypress.env('url'))
})

When ('I add items to cart',function()
{
    cy.contains("Women").click()
  /*  productpage.getAddButton().click()
    globalThis.data.productname.forEach(function(element) {
            cy.SelectProduct(element)   
        })*/

})

Then ('I click can checkout',()=>
{
    cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    //cy.get("form.compare-form").click()
    //productpage.getCheckout().click()
})



