/* eslint-disable max-len */
describe('🇪🇺 💡 | mainPage-XI | Main Page ,headings ,sections - (XI version) |', function() {
  // --- HOTT-82 -------------
  // Page Title
  it('XI - Header text - Page- sections - Northern Ireland Online Tariff', function() {
    cy.visit('/xi/sections');
    cy.contains('Northern Ireland Online Tariff');
  });
  // Gov Logo
  it('XI - Header text - GOV.UK logo ', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-header').should('be.visible', 'GOV.UK');
  });
 it('XI - sections details on heading ', function() {
    cy.visit('xi/sections');
    cy.contains('Look up commodity codes, duty and VAT rates');
    cy.contains(' Live animals; animal products').click();
    cy.contains('Section I: Live animals; animal products');
    cy.contains('Section I contains 5 chapters. Choose the chapter that best matches your goods.');
    cy.contains('There are important section notes for this part of the tariff:');
    cy.title().should('matches', 'Live animals; animal products - Northern Ireland Online Tariff - GOV.UK');
    cy.get('li:nth-of-type(1) > .govuk-breadcrumbs__link').click();
    cy.contains('Look up commodity codes, duty and VAT rates');
    // check other sections
    cy.contains('Wood and articles of wood; wood charcoal; cork and articles of cork; manufactures of straw, of esparto or of other plaiting materials; basket-ware and wickerwork').click();
    cy.contains('Section IX: Wood and articles of wood; wood charcoal; cork and articles of cork; manufactures of straw, of esparto or of other plaiting materials; basket-ware and wickerwork');
    cy.contains('Section IX contains 3 chapters. Choose the chapter that best matches your goods.');
    cy.get('li:nth-of-type(2) > .govuk-breadcrumbs__link').click();
    cy.contains('Section IX contains 3 chapters. Choose the chapter that best matches your goods.');
  });
  it('XI - Heading 2902', function() {
    cy.visit('/xi/headings/2902');
    cy.contains('Choose the commodity code below that best matches your goods to see more information');
  });
  it('XI - Chapter 99 ', function() {
    cy.visit('/xi/chapters/99');
    cy.contains('Choose the heading that best matches your goods');
    cy.contains('Goods delivered to vessels and aircraft').click();
    cy.contains('Choose the commodity code below that best matches your goods to see more information');
  });
  it('XI - Search the Tariff section', function() {
    cy.visit('/xi/sections');
    cy.contains('Search or browse the Tariff').click();
    cy.contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('9919000060');
    cy.checkCommPage('9919000060');
  });
  it('XI - A-Z section', function() {
    cy.visit('/xi/sections');
    cy.get('li:nth-of-type(2) > .govuk-header__link').click();
    cy.contains('A–Z of Classified Goods');
  });
  it('XI - Tools section', function() {
    cy.visit('/xi/sections');
    cy.get('li:nth-of-type(3) > .govuk-header__link').click();
    cy.contains('Certificate, licenses and documents');
    cy.contains('Additional codes');
    cy.contains('Chemicals');
    cy.get('.govuk-list')
        .should('be.visible', 'Search for tariff quotas, including daily updated balances.')
        .should('be.visible', 'Search for certificates, licenses and other document codes.')
        .should('be.visible', 'Search for additional codes. Additional codes are used on the tariff for a number of purposes to help you to classify goods accurately on your customs declaration.')
        .should('be.visible', 'Search the tariff for chemicals by ');
  });

  // HOTT-164
  it('XI - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer');
    cy.contains('API Documentation');
    //   cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.be.visible')
    cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist');
  });
  it('XI - Footnotes tab ', function() {
    cy.visit('/xi/commodities/4101203000');

    cy.contains('TN701').should('not.be.visible');
    // Import Tab
    cy.get('a#tab_import').click();
    cy.contains('TN701').should('not.be.visible');
    // Export Tab
    cy.get('a#tab_export').click();
    cy.contains('TN701').should('not.be.visible');
    // Footnotes Tab
    cy.get('a#tab_footnotes').click();
    cy.contains('Footnotes for commodity 4101203000');
    cy.contains('TN701');
    // Overview Tab does not contain Footnotes
    cy.get('a#tab_overview').click();
    cy.contains('TN701').should('not.be.visible');
  });
});

