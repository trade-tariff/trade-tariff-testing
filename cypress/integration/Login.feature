
Feature: As a trader i want to import white chocolate from Iceland

  I want to log into Conduit

  @smoke
  Scenario: i navigate to uk trade tariff page
    Given I open Conduit login page
    When I type in
      |  username  | password  |
      |  madviv@rediffmail.com  | password123  |
    And I click on Sign in button
    Then "Your Feed" should be shown

  @smoke
  Scenario: enter commodity code in search field and search
    Given I open Conduit login page
    When I type in
      |  username  | password  |
      |  madviv@rediffmail.com  | password123  |
    And I click on Sign in button
    Then "Your Feed" should be shown
  @smoke
  Scenario: select country as iceland and view tariff , VAT and excise information along with Quotas
    Given I open Conduit login page
    When I type in
      |  username  | password  |
      |  madviv@rediffmail.com  | password123  |
    And I click on Sign in button
    Then "Your Feed" should be shown
