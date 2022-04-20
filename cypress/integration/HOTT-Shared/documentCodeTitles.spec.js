/* eslint-disable max-len */
describe('UK 🇬🇧 XI 🇪🇺 | documentCodeTitles.spec.js | Validate document / certificate description + validity period |', function() {
  // HOTT-1255 - remove certificate document title from pop up window
  it(`UK - Certificate / Document details pop up `, function() {
    cy.visit(`/commodities/0104103000`);
    cy.get('.govuk-breadcrumbs__list').contains('Commodity 0104103000');
    cy.checkCommPage('0104103000');
    //
    cy.get('table:nth-of-type(1) > .govuk-table__body > tr:nth-of-type(1)  a[role=\'button\']').click();
    cy.contains('Other certificates:').should('not.exist');
    cy.contains('Particular provisions:').should('not.exist');
    cy.get('.info-inner').contains('Import control - CITES for All countries');
    cy.get('.info-inner').contains(' From 29 Jan 2022 to 30 Sep 2023');
    // div#popup a
    cy.get('.close [href]').click();
  });
  it.only(`XI - Certificate / Document details pop up `, function() {
    cy.visit(`xi/commodities/9706100000`);
    cy.get('.govuk-breadcrumbs__list').contains('Commodity 9706100000');
    cy.checkCommPage('9706100000');
    // cy.get('[data-module] .govuk-table:nth-child(9) [tabindex=\'-1\']:nth-of-type(1) .conditions-col [href]').click();
    cy.get('#measure-3896733').contains('Conditions').click();
    cy.contains('Other certificates:').should('not.exist');
    cy.contains('Particular provisions:').should('not.exist');
    cy.get('.info-inner').contains('Import control - CITES for All countries');
    cy.contains('From 19 Jan 2022');
    cy.get('.close [href]').click().wait(350);
    cy.get('#measure-20065049').contains('Conditions').click().wait(600);
    // cy.contains('Particular provisions:').should('not.exist');
    cy.get('.info-inner').contains('Import control on luxury goods for North Korea');
    cy.get('.info-inner').contains('From 1 Jan 2021');
    cy.get('div#popup a').click().wait(500);
    cy.contains('Goods necessary for the official purposes of diplomatic or consular missions of Member States in the DPRK or international organisations enjoying immunities in accordance with international law, or to the personal effects of their staff (Art 10.3 of Regulation (EU) 2017/1509)');
  });
  // 999L code - HOTT-1362
  it('UK Condition Code 999L - Separated with new text at the bottom', function() {
    cy.visit('/commodities/0702000007');
    cy.get('#measure-20164273').contains('Conditions').click();
    cy.get('.info-content').contains('Phytosanitary Certificate (import) for All countries');
    cy.code999L();
  });
  it('XI Condition Code 999L - Not to be shown in UK measures', function() {
    cy.visit('xi/commodities/0702000007');
    cy.get('#measure-20164273').contains('Conditions').click();
    cy.get('.info-content').contains('Phytosanitary Certificate (import) for All countries');
    cy.get('.info-content').should('not.contain', '999L');
  });
});
