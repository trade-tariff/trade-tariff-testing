
describe('Non preferential quota options from Taiwan to UK', function() {
  it('removes safeguards from the quota option', function() {
    cy.visit('/duty-calculator/uk/7208529900/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Taiwan'});
    cy.customsValue({monetary: '2000.00', shipping: '0.00', cost: '0.00'});
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();

    // Validates Third country duty option includes safeguard in calculation
    cy.contains('Option 1: Third-country duty');
    cy.get('table.govuk-table:nth-of-type(1)').should('contain', 'Additional duties (safeguard) (UK)'); // check label
    cy.get('table.govuk-table:nth-of-type(1) > tbody > tr:nth-of-type(4) > td:nth-of-type(3)').contains('500.00'); // check vat
    cy.get('table.govuk-table:nth-of-type(1) > tbody > tr:nth-of-type(5) > td:nth-of-type(3)').contains('1,000.00'); // check total

    // Validates non-preferential-quota total does not include safeguard in calculation
    cy.contains('Option 3: Non-preferential quota');
    cy.get('table.govuk-table:nth-of-type(3)').should('not.contain', 'safeguard'); // check label
    cy.get('table.govuk-table:nth-of-type(3) > tbody > tr:nth-of-type(3) > td:nth-of-type(3)').contains('400.00'); // check vat
    cy.get('table.govuk-table:nth-of-type(3) > tbody > tr:nth-of-type(4) > td:nth-of-type(3)').contains('400.00'); // check total
  });
});
