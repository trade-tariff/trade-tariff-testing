/* eslint-disable max-len */
// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - Trader Scheme - 🚫 UK Trader Scheme
describe('| RoW-NI307-e2e.spec | RoW (Argentina) to NI | Additional Codes + Document Codes |', function() {
  //
  it('RoW 🇦🇷 Argentina to NI | add codes + doc codes |', function() {
    cy.visit('/duty-calculator/xi/1516209821/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin

    // select country from list

    cy.otherOriginList({value: 'Argentina'});

    // Duties Apply
    cy.euDutiesApply();
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({tnei: '1000'});
    // Additional Codes

    cy.additionalCode({xi: 'C999'});
    cy.additionalCode({xi: 'C496'});
    // Document Codes
    cy.docCode({xi: 'c990'});
    cy.contains('Continue').click();
    // Document Codes
    cy.docCode({xi: 'd017'});
    cy.contains('Continue').click();

    // VAT Page
    cy.vat('0');
    cy.contains('VAT zero rate');
    cy.contains('Additional code(s)');
    cy.contains('C999, C496');
    cy.contains('Document(s)');
    cy.contains('C990, D017');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('You are importing commodity 1516 20 98 21 (C999, C496) from Argentina on 31 December 2023.');
    cy.contains('Option 1: Third-country duty');
    cy.contains('10.90% * £1,000.00');
    cy.contains('172.20 EUR / 1000 kg/biodiesel');
    cy.contains('Option 2: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms');
    cy.contains('0.00% * £1,000.00');
    cy.contains('172.20 EUR / 1000 kg/biodiesel');
    // go back to previous page to change doc code
    cy.get('.govuk-back-link').click();
    // Change to different Document Code
    cy.get('div:nth-of-type(3) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Do you have any of the following documents?');
    // Change doc codes and validate results reflected in calculations
    // select none of the above Code

    // Document Codes
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    // Document Codes
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    // VAT Page
    cy.vat('0');
    cy.contains('VAT zero rate');
    cy.contains('Additional code(s)');
    cy.contains('C999, C496');
    cy.contains('Document(s)');
    cy.contains('n/a');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('You are importing commodity 1516 20 98 21 (C999, C496) from Argentina on 31 December 2023.');
    cy.contains('Option 1: Third-country duty');
    cy.contains('10.90% * £1,000.00');
    cy.contains('Import duty (C999)');
    cy.contains('Definitive anti-dumping duty (EU)');
    cy.contains('172.20 EUR / 1000 kg/biodiesel');
    cy.contains('Import duty (C496)');
    cy.contains('Definitive countervailing duty (EU)');
    cy.contains('25.00% * £1,000.00');
    cy.contains('Option 2: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms').should('not.exist');
  });
});
