Feature:End to End Validation

    Scenario: eCommerce product checkout
    Given I open eCommerce page
    When I add items to cart
    Then I click can checkout 
