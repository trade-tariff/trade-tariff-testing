/* eslint-disable max-len */
describe('UK 🇬🇧 XI 🇪🇺 | conditionsFootnotes | XI Service - Validate Conditions and Footnotes on commodity page + important notes link |', function() {
  it('Conditions on UK imports on XI service ', function() {
    cy.visit('/xi/commodities/6403990510/#import');
    cy.contains('UK import controls').click();
    cy.get('table:nth-of-type(4) > tbody > tr:nth-of-type(1) > td:nth-of-type(3) > a[role=\'button\']').click();
    cy.contains('Animal Health Certificate for All countries');
    cy.contains('B: Presentation of a certificate/licence/document');
    cy.get('.info-inner').contains(' From 29 Jan 2022 to 30 Sep 2023');
    cy.get('.close [href]').click();
    cy.wait(450);
    // cy.get('#measure-20174652').contains('PR003').click();
    cy.contains('PR003').click();
    cy.contains('Animal Health Certificate for All countries');
  });
  it('VAT and Excise on XI service', function() {
    cy.visit('/xi/commodities/9305200010#import');
    cy.contains('VAT and excise').click();
    cy.contains('03020').click();
    cy.contains('Value added tax for All countries');
  });
  // important notes for classifying your goods - link to be removed when there are no notes for chapters headings
  const country = ['', 'xi'];
  for (let j = 0; j < country.length; j++) {
    it(`${country[j]} - No link to important notes section when there are no notes - headings `, function() {
      cy.visit(`${country[j]}/headings/9880`);
      cy.contains('There are important notes for classifying your goods shown further down this page').should('not.exist');
    });
    it(`${country[j]} - No link to important notes section when there are no notes - chapters`, function() {
      cy.visit(`${country[j]}/chapters/98`);
      cy.contains('There are important notes for classifying your goods shown further down this page').should('not.exist');
    });
    it(`${country[j]} - Link to important notes section when there are associated notes - headings `, function() {
      cy.visit(`${country[j]}/headings/1502`);
      cy.contains('There are important notes for classifying your goods shown further down this page');
    });
    it(`${country[j]} - Link to important notes section when there are associated notes - chapters`, function() {
      cy.visit(`${country[j]}/chapters/15`);
      cy.contains('There are important notes for classifying your goods shown further down this page');
    });
  }
});
