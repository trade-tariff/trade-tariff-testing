/* eslint-disable max-len */
describe('🇬🇧 💡 | mainPage-UK | Main Page - headers ,sections  - (UK version)|', function() {
  // --- Headings to be changed for UK -------------

  // Page Title
  it('UK - Header text - sections page', function() {
    cy.visit('/sections');
    cy.get('.govuk-header').should('be.visible', 'UK Integrated Online Tariff');
  });
  // Gov Logo
  it('UK - GOV.UK logo ', function() {
    cy.visit('/sections');
    cy.get('.govuk-header').should('be.visible', 'GOV.UK');
  });
  it('UK - find_commodity page', function() {
    cy.visit('/find_commodity');
    cy.contains('The UK Integrated Online Tariff');
    cy.contains('Look up commodity codes, import duties, taxes and controls');
    cy.contains('Are you importing goods into Northern Ireland?');
    //  cy.contains('If you\'re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not \'at risk\' of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland Online Tariff.');
    cy.contains('Search for a commodity');
    cy.contains('The UK Integrated Online Tariff helps you to:');
    cy.contains('find commodity codes for imports into or exports out of the UK');
    cy.contains('find the taxes and duties that apply to those imports');
    cy.contains('find out which certificates and licences apply to the import of your goods');
    cy.contains('The first step is to find the commodity that you are importing or exporting.');
    cy.contains('Enter the name of the goods or a commodity code');
    cy.contains('Commodity codes are 10-digit numbers that classify goods so you can fill in declarations and other paperwork. You must use the right commodity code.');
    cy.contains('Alternatively, you can browse the goods classification or look for your product in the A-Z.');
  });
  it('UK - Browse page ', function() {
    cy.visit('/browse');
    cy.browsePage();
    cy.contains(' Live animals; animal products').click();
    cy.contains('Section I - Live animals; animal products');
    cy.contains('Section I contains 5 chapters. Choose the chapter that best matches your goods.');
    cy.contains('There are important section notes for this part of the tariff:');
    cy.title().should('eq', 'Live animals; animal products - UK Integrated Online Tariff - GOV.UK');
    // validate home breadcrumb
    cy.get('.govuk-breadcrumbs__link').contains('Browse').click();
    cy.contains('Browse the tariff');
    cy.get('.govuk-breadcrumbs__link').contains('Home').click();
    cy.contains('Look up commodity codes, import duties, taxes and controls');
  });
  it('UK - Sections page ', function() {
    cy.visit('/sections/12');
    cy.contains('UK Integrated Online Tariff');
    cy.contains('Section XII - Footwear, headgear, umbrellas, sun umbrellas, walking-sticks, seat-sticks, whips, riding-crops and parts thereof; prepared feathers and articles made therewith; artificial flowers; articles of human hair');
    cy.contains('Section XII contains 4 chapters. Choose the chapter that best matches your goods.');
  });
  it('UK - Chapter page ', function() {
    cy.visit('/chapters/98');
    cy.contains('Choose the heading that best matches your goods');
    cy.get('.govuk-summary-list').contains('Chapter');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.get('.govuk-summary-list').contains('Date of trade');

    cy.contains('Component parts of complete industrial plant in the framework of external trade (Commission Regulation EC No 113/2010 of 9.02.2010)').click();
    cy.contains('Choose the commodity code below that best matches your goods to see more information');
  });
  it('UK - Heading page', function() {
    cy.visit('/headings/2902');
    cy.contains('Choose the commodity code below that best matches your goods to see more information');
    cy.get('.govuk-summary-list').contains('Heading');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.get('.govuk-summary-list').contains('Date of trade');
    cy.contains('Choose the commodity code below that best matches your goods to see more information');
  });
  it('UK - Commodity page - with Supp units', function() {
    cy.visit('/commodities/6401929000');
    cy.get('.govuk-summary-list').contains('Commodity');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.contains('Waterproof footwear with outer soles and uppers of rubber or of plastics, the uppers of which are neither fixed to the sole nor assembled by stitching, riveting, nailing, screwing, plugging or similar processes — Other footwear — Covering the ankle but not covering the knee — With uppers of plastics');
    cy.get('.govuk-summary-list').contains('Supplementary unit');
    cy.get('.govuk-summary-list').contains('Number of pairs (pa)');
    cy.get('.govuk-summary-list').contains('Date of trade');
    cy.get('.govuk-summary-list').contains('What are supplementary units?').click();
    cy.contains('Supplementary units are used when an additional measurement unit is needed on customs declarations. For example: the quantity of the products as well as the weight in kilograms.');
  });
  it('UK - Search the Tariff section', function() {
    cy.visit('/sections');
    cy.contains('Search the UK Integrated Online Tariff');
    cy.searchForCommodity('9919000060');
    cy.checkCommPage('9919000060');
  });
  it('UK - A-Z section', function() {
    cy.visit('/sections');
    cy.get('li:nth-of-type(3) > .govuk-header__link').click();
    cy.contains('A–Z of Classified Goods');
  });
  it('UK - Tools section', function() {
    cy.visit('/sections');
    cy.get('li:nth-of-type(4) > .govuk-header__link').click();
    cy.contains('Certificate, licenses and documents');
    cy.contains('Additional codes');
    cy.contains('Chemicals');
    cy.get('.govuk-list')
        .should('be.visible', 'Search for tariff quotas, including daily updated balances.')
        .should('be.visible', 'Search for certificates, licenses and other document codes.')
        .should('be.visible', 'Search for additional codes. Additional codes are used on the tariff for a number of purposes to help you to classify goods accurately on your customs declaration.')
        .should('be.visible', 'Search the tariff for footnotes')
        .should('be.visible', 'Search the tariff for chemicals by ');
  });
  // HOTT-164
  it('UK - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function() {
    cy.visit('/sections');
    cy.contains('API Documentation');
    // cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.be.visible')
    cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist');
  });
  it('UK - Footnotes tab ', function() {
    cy.visit('/commodities/4101203000');
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
  it('UK - News Banner', function() {
    cy.visit('/sections');
    cy.newsBannerUK();
  });
  it.skip('UK - export tab', function() {
    cy.visit('/commodities/0702000007?country=#export');
    // without selecting any country
    cy.contains('The commodity code for exporting and Intrastat reporting is 07020000.');
    cy.contains('Check duties and customs procedures for exporting goods');
    cy.contains('Find information about how to move goods from the UK to the rest of the world.');

    cy.contains('Use this service to check:');
    cy.contains('rules and restrictions');
    cy.contains('tax and duty rates');
    cy.contains('what exporting documents you need');
    // links on page
    cy.get('div#export > p:nth-of-type(1) > a[target=\'_blank\']');
    // EU country selected

    // Non EU country selected
  });
});
