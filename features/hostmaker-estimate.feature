Feature: Get the estimate for a property in a given postcode

@demo
  Scenario: Search for a train from London to Paris
    Given I am on Hostmaker website
    When I enter my postcode "N1 9PD"
    And I select "White Lion Street" as my address
    And I select "2 bedrooms" from the number of bedrooms option
    And I enter email address as "test@test.com"
    And I click calculate
    Then I should see the estimate value is between "1075" and "1200"
