Feature: Write A
  Feature Description
  Scenario: Create A Shift Rotation
    Given The browser is open
    When I log into the beta
    When I open the rotation wizard
    When I enter New as name
    When I click Group Number 0 times
    When I click Week Number 0 times
    When I enter the anchor date 01.01.2020
    When I press Finish Rotation
    When I select Tuesday and assign a Preset
    Then I click Add Employees