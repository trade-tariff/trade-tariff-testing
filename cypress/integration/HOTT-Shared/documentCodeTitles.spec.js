/* eslint-disable max-len */
describe('UK 🇬🇧 XI 🇪🇺 | documentCodeTitles.spec.js | Validate document / certificate description |', function() {
  // HOTT-1255 - remove certificate document title from pop up window
  it(`UK - Certificate / Document details pop up `, function() {
    cy.visit(`/commodities/0104103000`);
    cy.get('.govuk-breadcrumbs__list').contains('Commodity 0104103000');
    cy.checkCommPage('0104103000');
    //
    cy.get('table:nth-of-type(1) > .govuk-table__body > tr:nth-of-type(1)  a[role=\'button\']').click();
    cy.contains('Other certificates:').should('not.exist');
    cy.contains('Particular provisions:').should('not.exist');
    // div#popup a
    cy.get('div#popup a').click().wait(500);
    //
    cy.get('tr:nth-of-type(2) > .conditions-col.govuk-table__cell > a[role=\'button\']').click();
    cy.contains('National Document:').should('not.exist');
    cy.get('div#popup a').click().wait(500);
    //
    cy.get('[data-module] [tabindex=\'-1\']:nth-of-type(3) .conditions-col [href]').click();
    cy.contains('Other certificates:').should('not.exist');
  });
  it(`XI - Certificate / Document details pop up `, function() {
    cy.visit(`xi/commodities/9706100000`);
    cy.get('.govuk-breadcrumbs__list').contains('Commodity 9706100000');
    cy.checkCommPage('9706100000');
    // //
    cy.get('[data-module] .govuk-table:nth-child(9) [tabindex=\'-1\']:nth-of-type(1) .conditions-col [href]').click();
    cy.contains('Other certificates:').should('not.exist');
    cy.contains('Particular provisions:').should('not.exist');
    cy.get('div#popup a').click().wait(500);
    //
    cy.get('table:nth-of-type(3) > .govuk-table__body > .KP.govuk-table__row > .conditions-col.govuk-table__cell > a[role=\'button\']').click();
    cy.contains('Particular provisions:').should('not.exist');
    cy.get('div#popup a').click().wait(500);
    cy.contains('Goods necessary for the official purposes of diplomatic or consular missions of Member States in the DPRK or international organisations enjoying immunities in accordance with international law, or to the personal effects of their staff (Art 10.3 of Regulation (EU) 2017/1509)');
  });
});
