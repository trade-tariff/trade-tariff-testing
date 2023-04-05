
describe('| RoW-GB204-e2e.spec | 🇦🇫🇸Afghanistan to 🇬🇧 GB  |', function() {
  it(`e2e RoW to GB | 🇦🇫 Afghanistan to 🇬🇧 GB | Document code |`, function() {
    // select future date
    cy.visit(`/duty-calculator/uk/3926909790/import-date`);

    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Afghanistan'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    //  cy.quantity({tne:'1',kgm:'1',dap:'1'})
    cy.additionalCode({uk: 'none'});
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'c119'});
    cy.contains('Continue').click();

    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains(' VAT');
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - GSP – Least Developed Countries');
    cy.contains('Option 3: Airworthiness tariff suspension');
    cy.contains('Option 4: Suspension - goods for certain categories of ships, boats and');
    cy.contains('other vessels and for drilling or production platforms');
  });
  it(`e2e RoW to GB | 🇦🇫 Afghanistan to 🇬🇧 GB | Excise code | Wine |`, function() {
    // select future date
    cy.visit(`/duty-calculator/uk/2204210600/import-date`);
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Afghanistan'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({ltr: '1', lpa: '1'});
    // Excise code
    cy.contains('419 - Wine with an alcoholic strength exceeding 22% ABV');
    cy.exciseCode('419');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - GSP – Least Developed Countries');
  });
  it(`e2e RoW to GB | 🇫🇷 France to 🇬🇧 GB | Excise code | Champagne |`, function() {
    // select future date
    cy.visit(`/duty-calculator/uk/2204101100/import-date`);
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'France'});
    cy.customsValue({monetary: '4000.00', shipping: '500.00', cost: '500.00'});
    cy.quantity({ltr: '100'});
    // Excise code
    cy.contains('411 - Sparkling wine of fresh grape with an alcoholic strength exceeding 8.5% ABV but not exceeding 15% ABV');
    cy.exciseCode('411');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - European Union');
    cy.contains('£5,000.00');
    cy.contains('£1,000.00');
    cy.contains('100 litres');
    cy.contains('Import quantity');
  });
});
