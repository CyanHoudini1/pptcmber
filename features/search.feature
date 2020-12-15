Feature: Write A
  Feature Description
  Scenario: Open Rotation Wizard
    Given The browser is open
    When I log into the beta
    When I open the rotation wizard
    When I enter Test12 as name
    When I click Group Number 0 times
    When I click Week Number 0 times
    When I enter the anchor date 14.12.2020
    When I press Set up Rotation
    When I select Monday and assign a Preset
    When I press Assign Employees
    When I press the checkbox to select an employee
    When I press Add Selected
    When I press Finish Rotation Wizard