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
  it('XI - find_commodity page', function() {
    cy.visit('xi/find_commodity');
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Look up commodity codes, import duties, taxes and controls');
    cy.contains('Are your goods at risk of onward movement to the EU?');
    //  cy.contains('If you\'re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not \'at risk\' of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland Online Tariff.');
    cy.contains('Search for a commodity');
    cy.contains('The Northern Ireland Online Tariff helps you to:');
    cy.contains('find commodity codes for imports into or exports out of Northern Ireland');
    cy.contains('find the taxes and duties that apply to those imports');
    cy.contains('find out which certificates and licences apply to the import of your goods');
    cy.contains('The first step is to find the commodity that you are importing or exporting.');
    cy.contains('Enter the name of the goods or a commodity code');
    cy.contains('Commodity codes are 10-digit numbers that classify goods so you can fill in declarations and other paperwork. You must use the right commodity code.')
    cy.contains('Alternatively, you can browse the goods classification or look for your product in the A-Z.');
  });
  it('XI - Browse page ', function() {
    cy.visit('xi/browse');
    cy.browsePage();
    cy.contains(' Live animals; animal products').click();
    cy.contains('Section I - Live animals; animal products');
    cy.contains('Section I contains 5 chapters. Choose the chapter that best matches your goods.');
    cy.contains('There are important section notes for this part of the tariff:');
    cy.title().should('eq', 'Live animals; animal products - Northern Ireland Online Tariff - GOV.UK');
    // validate home breadcrumb
    cy.get('.govuk-breadcrumbs__link').contains('Browse').click();
    cy.contains('Browse the tariff');
    cy.get('.govuk-breadcrumbs__link').contains('Home').click();
    cy.contains('Look up commodity codes, import duties, taxes and controls');
  });
   it('XI - Sections page ', function() {
    cy.visit('xi/sections/12');
    cy.contains('UK Integrated Online Tariff');
    cy.contains('Section XII - Footwear, headgear, umbrellas, sun umbrellas, walking-sticks, seat-sticks, whips, riding-crops and parts thereof; prepared feathers and articles made therewith; artificial flowers; articles of human hair');
    cy.contains('Section XII contains 4 chapters. Choose the chapter that best matches your goods.');
  });
  it('XI - Chapter page ', function() {
    cy.visit('xi/chapters/98');
    cy.contains('Choose the heading that best matches your goods');
    cy.get('.govuk-summary-list').contains('Chapter');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.get('.govuk-summary-list').contains('Date of trade');

    cy.contains('Component parts of complete industrial plant in the framework of external trade (Commission Regulation EC No 113/2010 of 9.02.2010)').click();
    cy.contains('Choose the commodity code below that best matches your goods to see more information');
  });
  it('XI - Heading page', function() {
    cy.visit('xi/headings/2902');
    cy.contains('Choose the commodity code below that best matches your goods to see more information');
    cy.get('.govuk-summary-list').contains('Heading');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.get('.govuk-summary-list').contains('Date of trade');
    cy.contains('Choose the commodity code below that best matches your goods to see more information');
  });
  it('XI - Commodity page - without Supp units', function() {
    cy.visit('xi/commodities/6406109010');
    cy.get('.govuk-summary-list').contains('Commodity');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.contains('Parts of footwear (including uppers whether or not attached to soles other than outer soles); removable insoles, heel cushions and similar articles; gaiters, leggings and similar articles, and parts thereof — Uppers and parts thereof, other than stiffeners — Of other materials — Hand-made');
    cy.get('.govuk-summary-list').contains('Supplementary unit');
    cy.get('.govuk-summary-list').contains('No supplementary unit required.');
    cy.get('.govuk-summary-list').contains('Date of trade');
    cy.get('.govuk-summary-list').contains('What are supplementary units?').click();
    cy.contains('Supplementary units are used when an additional measurement unit is needed on customs declarations. For example: the quantity of the products as well as the weight in kilograms.');
  });

  it('XI - Search the Tariff section', function() {
    cy.visit('/xi/sections');
    cy.contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('9919000060');
    cy.checkCommPage('9919000060');
  });
  it('XI - A-Z section', function() {
    cy.visit('/xi/sections');
    cy.get('li:nth-of-type(3) > .govuk-header__link').click();
    cy.contains('A–Z of Classified Goods');
  });
  it('XI - Tools section', function() {
    cy.visit('/xi/sections');
    cy.get('li:nth-of-type(4) > .govuk-header__link').click();
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
  it('XI - News Banner', function() {
    cy.visit('xi/sections');
    cy.newsBannerXI();
  });
});

