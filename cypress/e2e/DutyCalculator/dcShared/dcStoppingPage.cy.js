describe('|dcStoppingPage.spec| Stopping page for certificate code N990', function() {
  it('RoW-UK - India - Other Document codes involved ', function() {
    cy.visit('/duty-calculator/uk/3921905590/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'India'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.additionalCode('2700');
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.contains('Do you have any of the following documents?');
    cy.get('.govuk-back-link').click();
    // select no
    cy.docCode({uk: 'none'});
    cy.contains('Continue').click();
    cy.dcStoppingPage();
    // Page validations
    cy.get('p > .govuk-link').click();
    cy.contains('3921905590');
    cy.go('back');
    // select correct document navigates to N990 page
    cy.get('.govuk-list.govuk-list--bullet  a').click();
    cy.docCode({uk: 'none'});
    cy.contains('Continue').click();
    // breadcrumb
    cy.get('.govuk-back-link').click();
    cy.contains('Do you have any of the following documents?');
  });
  it('RoW-UK - Brazil - One N990 code ', function() {
    cy.visit('/duty-calculator/uk/1701141000/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Brazil'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({kgm: '100', dap: '100'});
    // Yes , Yes
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.contains('Check your answers');
    cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click();

    // Yes , No
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'none'});
    cy.contains('Continue').click();
    cy.dcStoppingPage();
    cy.get('.govuk-back-link').click();
    cy.get('.govuk-back-link').click();

    // No , Yes
    cy.docCode({uk: 'none'});
    cy.contains('Continue').click();
    cy.dcStoppingPage();
  });
  it('RoW-GB - Chile - Multiple N990 codes ', function() {
    cy.visit('/duty-calculator/uk/2007991000/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Chile'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.docCode({uk: 'none'});
    cy.contains('Continue').click();
    cy.dcStoppingPage();
  });
});
