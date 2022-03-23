// Retail Price
describe('| RoW-NI308-e2e.spec | RoW (Norway) to NI | Document Code , Retail Price , Excise Code  |', function() {
  it('RoW 🇳🇴 Norway  to NI | Document Code , Retail Price , Excise Code |', function() {
    cy.visit('/duty-calculator/xi/2402209000/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin

    // select country from list

    cy.otherOriginList({value: 'Norway'});

    cy.traderScheme('yes');
    cy.finalUseNI('no');
    // Duties Apply
    cy.euDutiesApply();
    // // Duties Apply
    // cy.euDutiesApply();
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // // Document Code
    // cy.docCode({xi: 'y021'}).check();
    // cy.contains('Continue').click();
    // Import Quantity
    cy.quantity({ret: '1000', mil: '1000'});
    // Document Code
    cy.docCode({xi: 'y021'}).check();
    cy.contains('Continue').click();
    // Excise code 611
    cy.exciseCode('611');
    cy.contains('Document(s)');
    cy.contains('Y021');
    cy.contains('£1,000.00');
    cy.contains('1000 x 1,000 items');
    cy.contains('Excise additional code');
    cy.contains('611');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('You are importing commodity 2402 20 90 00 from Norway on 31 May 2022.');
    // doc code y021 =  Apply the mentioned duty 27.95%
    cy.contains('Option 1: Third-country duty');
    cy.contains('611 - Cigarettes');

    cy.contains('Option 2: Tariff preference - European Economic Area');
    cy.contains('27.95% * £1,000.00');
    cy.contains('Tariff preference (EU)');

    // go back to previous page to change doc code
    cy.get('.govuk-back-link').click().wait(300);
    // Change to different Document Code
    cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Do you have any of the following documents?');
    // Document Code
    cy.docCode({xi: 'none'}).check();
    cy.contains('Continue').click();
    // Excise code 611
    cy.exciseCode('611');
    cy.contains('Document(s)');
    cy.contains('n/a');
    cy.contains('£1,000.00');
    cy.contains('1000 x 1,000 items');
    cy.contains('Excise additional code');
    cy.contains('611');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('You are importing commodity 2402 20 90 00 from Norway on 31 May 2022.');
    // doc code No code  =  Measure not applicable
    cy.contains('Option 1: Third-country duty');
    cy.contains('611 - Cigarettes');
    cy.contains('Option 2: Tariff preference - European Economic Area').should('not.exist');
  });
});
