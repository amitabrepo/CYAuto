class HomePage
{

getEditBox()
{
    return(cy.get('input[name="name"]:nth-child(2)'))
}
getTwoWayDataBinding()
{
    return (cy.get('input[name="name"]:nth-child(1)'))

}
getGender()
{
    return (cy.get('select'))
}

getShop()
{
    return (cy.get(':nth-child(2) > .nav-link'))
            
}
getEnterp()
{
    return(cy.get('#inlineRadio3'))
}
}
export default HomePage;