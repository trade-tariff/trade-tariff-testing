describe('| RoW-NI307-e2e.spec | RoW (Argentina) to NI | Additional Codes + Document Codes |', function() {
  it('RoW 🇦🇷 Argentina to NI | add codes + doc codes |', function() {
    cy.visit('/duty-calculator/xi/1516209821/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'canada'});
    cy.euDutiesApply();
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({kgm: '1'});
    cy.additionalCode('B999');
    cy.additionalCode('B999');
    cy.docCode({xi: 'c990'});
    cy.contains('Continue').click();

    cy.vat('0');
    cy.contains('VAT zero rate');
    cy.contains('Additional code(s)');
    cy.contains('B999');
    cy.contains('Document(s)');
    cy.contains('C990');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Third-country duty');
    cy.contains('10.90% * £1,000.00');
    cy.contains('0.00% * £1,109.35');
    cy.contains('Suspension');
    cy.contains('0.00% * £1,000.00');
    cy.contains('0.00% * £1,000.35');
    cy.get('.govuk-back-link').click();
    cy.get('a[href^="/duty-calculator/document-codes"]').contains('Change').click();
    cy.contains('Do you have any of the following documents?');

    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.vat('0');
    cy.contains('VAT zero rate');
    cy.contains('Additional code(s)');
    cy.contains('B999');
    cy.contains('Document(s)');
    cy.contains('n/a');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Third-country duty');
    cy.contains('10.90% * £1,000.00');
    cy.contains('Import duty (B999)');
    cy.contains('Definitive countervailing duty (EU)');
    cy.contains('0.00% * £1,109.35');
    cy.contains('Import duty (B999)');
    cy.contains('Definitive countervailing duty (EU)');
    cy.contains('0.00% * £1,000.35');
    cy.contains('Suspension').should('not.exist');
  });
});
