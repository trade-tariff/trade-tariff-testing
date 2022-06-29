Feature: As a trader i want to be able to switch between XI and UK tariffs 🇪🇺

  Trader in XI i would like to switch between XI and UK tariff sites for tariff details

  Scenario: Switch links on Main Page
    Given I am on XI Trade Tariff main page
    When I click on switch link on XI page
    Then UK version of Trade Tariff page is displayed
    When I click on switch link on UK page
    Then XI version of Trade Tariff page is displayed


