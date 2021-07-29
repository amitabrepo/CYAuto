class ProductPage{
getAddButton()
{
    return ( cy.get(':nth-child(2) > .nav-link'))
}

getCheckout()
{
    return(cy.get('a.nav-link.btn.btn-primary'))
}

}

export default ProductPage;