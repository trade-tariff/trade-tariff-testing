
describe('| RoW-GB206-e2e.spec | additional codes |', function() {
  const Codes = ['C491', 'C490', 'C493', 'C497'];

  it(`e2e RoW 🇦🇷 to 🇬🇧 GB 🛢️  - One additional code / Changing code`, function() {
    cy.visit(`/duty-calculator/uk/1516209821/import-date`);
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Argentina'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.quantity({tnei: '1'});
    cy.additionalCode({uk: 'C999'});

    // Select Document Code
    // suspensions doc code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();

    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Third-country duty');
    cy.contains('Suspension - goods for certain categories of ships, ');
    cy.contains('boats and other vessels and for drilling or production platforms');
    cy.contains(`1516 20 98 21 (C999)`);
    cy.contains(`Import duty (C999)`);
    cy.contains('0.00% * £850.00');

    for (let i = 0; i < Codes.length; i++) {
      cy.get('.govuk-back-link').click();
      cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click();
      cy.additionalCode({uk: `${Codes[i]}`});
      // Select Document Code
      cy.docCode({uk: 'c990'});
      cy.contains('Continue').click();
      cy.docCode({uk: 'd017'});
      cy.docCode({uk: 'd018'});
      cy.contains('Continue').click();
      cy.vat('20');
      cy.confirmPage();
      cy.dutyPage();
      cy.contains(`1516 20 98 21 (${Codes[i]})`);
    }
  });
  it(`e2e RoW 🇨🇦 to 🇬🇧 GB 🛢️  - More than one additional code`, function() {
    cy.visit(`duty-calculator/uk/1516209821/import-date`);
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Canada'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({tnei: '1'});
    // additional codes
    cy.additionalCode({uk: 'B999'});
    cy.additionalCode({uk: 'B999'});
    // Select Document Code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();

    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Third-country duty');
    cy.contains('Tariff preference - Canada');
    cy.contains('Suspension - goods for certain categories of ships, ');
    cy.contains('boats and other vessels and for drilling or production platforms');
    cy.contains(`1516 20 98 21 (B999, B999)`);
    cy.contains(`Import duty (B999)`);
    cy.contains('Definitive anti-dumping duty (UK)');
    cy.contains('Definitive countervailing duty (UK)');
    cy.contains('£741.72');
    cy.contains('£610.92');
  });
});
