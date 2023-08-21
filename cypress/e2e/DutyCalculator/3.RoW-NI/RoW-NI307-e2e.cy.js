describe('| RoW-NI307-e2e.spec | RoW (Argentina) to NI | Additional Codes + Document Codes |', function() {
  it('RoW 🇦🇷 Argentina to NI | add codes + doc codes |', function() {
    cy.visit('/duty-calculator/xi/1516209821/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'Argentina'});
    cy.euDutiesApply();
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({tnei: '1000'});

    cy.additionalCode({xi: 'C999'});
    cy.additionalCode({xi: 'C999'});
    cy.docCode({xi: 'c990'});
    cy.contains('Continue').click();

    cy.vat('0');
    cy.contains('VAT zero rate');
    cy.contains('Additional code(s)');
    cy.contains('C999, C999');
    cy.contains('Document(s)');
    cy.contains('C990');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Third-country duty');
    cy.contains('10.90% * £1,000.00');
    cy.contains('172.20 EUR / 1000 kg/biodiesel');
    cy.contains('Suspension');
    cy.contains('0.00% * £1,000.00');
    cy.contains('172.20 EUR / 1000 kg/biodiesel');
    cy.get('.govuk-back-link').click();
    cy.get('a[href^="/duty-calculator/document-codes"]').contains('Change').click();
    cy.contains('Do you have any of the following documents?');

    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.vat('0');
    cy.contains('VAT zero rate');
    cy.contains('Additional code(s)');
    cy.contains('C999, C999');
    cy.contains('Document(s)');
    cy.contains('n/a');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Third-country duty');
    cy.contains('10.90% * £1,000.00');
    cy.contains('Import duty (C999)');
    cy.contains('Definitive anti-dumping duty (EU)');
    cy.contains('172.20 EUR / 1000 kg/biodiesel');
    cy.contains('Import duty (C999)');
    cy.contains('Definitive countervailing duty (EU)');
    cy.contains('237.00 EUR / 1000 kg/biodiesel');
    cy.contains('Suspension').should('not.exist');
  });
});
