
Feature: As a trader i want to import white chocolate from iceland to XI

  Trader in XI would like to import white chocolate from iceland and want to know more information.

  Scenario: importing white chocolate from iceland
    Given i am on Trade Tariff main page
    When i enter commodity code 1704903000 in search tariff box
    Then Commodity information for 1704903000 is displayed
    And "Overview" should be shown
    And "Import" should be shown
    And "Export" should be shown
    When i select Import button
    And select Iceland from All countries list
    Then Measures for Iceland should be shown
    And following information should shown
     |measure           | Value  |
     |VAT standard rate | 20.00 %  |
     |VAT zero rate     |0.00 %    |
     |Third country duty |9.10 % + 45.10 EUR / 100 kg MAX 18.90 % + 16.50 EUR / 100 kg |
     |Tariff preference  |0.00 % + 43.59 EUR / 100 kg MAX 18.90 % + 16.50 EUR / 100 kg |







