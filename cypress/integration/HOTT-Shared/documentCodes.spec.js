/* eslint-disable max-len */
describe('UK 🇬🇧 XI 🇪🇺 | documentCodes.spec.js | Validate document / certificate description |', function() {
  // HOTT-1255 - remove certificate document title from pop up window
  it(`UK - Certificate / Document details pop up `, function() {
    cy.visit(`/commodities/0104103000`);
    cy.get('.govuk-breadcrumbs__list').contains('Commodity 0104103000');
    cy.checkCommPage('0104103000');
    //
    cy.get('table:nth-of-type(1) > .govuk-table__body > tr:nth-of-type(1)  a[role=\'button\']').click();
    cy.contains('Presentation of the required "CITES" certificate');
    cy.contains('Declared goods do not belong to the Washington Convention (CITES)');
    cy.get('.close [href]').click().wait(500);
    //
    cy.get('tr:nth-of-type(2) > .conditions-col.govuk-table__cell > a[role=\'button\']').click();
    cy.contains('Importation of animal pathogens Licence under the Importation of Animal pathogens Order 1980 (IAPO)');
    cy.get('.close [href]').click().wait(500);
    //
    cy.get('[data-module] [tabindex=\'-1\']:nth-of-type(3) .conditions-col [href]').click();
    cy.contains('Common Health Entry Document for Animals (CHED-A) (as set out in Part 2, Section A of Annex II to Commission Implementing Regulation (EU) 2019/1715 (OJ L 261))');
  });
  it(`XI - Certificate / Document details pop up `, function() {
    cy.visit(`xi/commodities/9706100000`);
    cy.get('.govuk-breadcrumbs__list').contains('Commodity 9706100000');
    cy.checkCommPage('9706100000');
    //
    cy.get('[data-module] .govuk-table:nth-child(9) [tabindex=\'-1\']:nth-of-type(1) .conditions-col [href]').click();
    cy.contains('Presentation of the required "CITES" certificate');
    cy.contains('Declared goods do not belong to the Washington Convention (CITES)');
    cy.get('.close [href]').click().wait(500);
    //
    cy.get('table:nth-of-type(3) > .govuk-table__body > .KP.govuk-table__row > .conditions-col.govuk-table__cell > a[role=\'button\']').click();
    cy.contains('Travellers\' personal effects or goods of a non-commercial nature for travellers\' personal use contained in their luggage (Art 10.2 of Regulation (EU) 2017/1509)');
    cy.get('.close [href]').click().wait(500);
    cy.contains('Goods necessary for the official purposes of diplomatic or consular missions of Member States in the DPRK or international organisations enjoying immunities in accordance with international law, or to the personal effects of their staff (Art 10.3 of Regulation (EU) 2017/1509)');
  });
});
