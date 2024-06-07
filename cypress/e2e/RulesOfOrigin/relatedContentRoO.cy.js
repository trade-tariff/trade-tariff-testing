// HOTT- 954
describe('| relatedContentRoO - Related Content - links ', {tags: ['config', 'roo-tag']}, function() {
  it('| XI Service - EU Trading relations with Chile - Related Content |', function() {
    cy.visit('xi/commodities/0702000007');
    cy.pickTradingPartner('Chile');
    cy.contains('Origin').click();
    cy.contains('EU - Chile Association Agreement');
    cy.contains('Related content');
    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(1) > a').contains('The EU\'s trading relationship with Chile').click();
    cy.contains('EU trade relations with Chile. Facts, figures and latest developments.');
    cy.go('back');
    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(2) > a').contains('The EU - Chile Association Agreement').click();
    cy.contains('Agreement establishing an association between the European Community and its Member States, of the one part,')+
                ('and the Republic of Chile, of the other part - Final act');
    cy.go('back');
  });
  it('UK - RVC-related imagery for AU trade agreement', function() {
    const agreement = 'Free Trade Agreement between the United Kingdom of Great Britain and Northern Ireland and Australia';
    cy.visit('/commodities/0406103010?country=AU#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Australia', 'import');
    // How Originating is defined
    cy.howOrginating('Australia', `${agreement}`);
    // How wholly obtained is defined
    cy.contains('Are your goods originating?');
    cy.contains(`How 'wholly obtained' is defined in the ${agreement}`);
    cy.contains('Click on the ‘Continue’ button to see which parts and processes should be included or ');
    cy.contains(`disregarded in determining originating status for the ${agreement}.`);
    cy.url().should('include', '/rules_of_origin/0406103010/AU/wholly_obtained_definition');
    cy.contains('Regional Value Content');
    cy.contains('Build-Down Method');
    cy.contains('RVC');
    cy.contains('Build-Up Method');
  });
  it('UK - RVC-related imagery for NZ trade agreement', function() {
    const agreement = 'Free Trade Agreement between the United Kingdom of Great Britain and Northern Ireland and New Zealand';
    cy.visit('/commodities/0406103010?country=NZ#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('New Zealand', 'import');
    // How Originating is defined
    cy.howOrginating('New Zealand', `${agreement}`);
    // How wholly obtained is defined
    cy.contains('Are your goods originating?');
    cy.contains(`How 'wholly obtained' is defined in the ${agreement}`);
    cy.contains('Click on the ‘Continue’ button to see which parts and processes should be included or ');
    cy.contains(`disregarded in determining originating status for the ${agreement}.`);
    cy.url().should('include', '/rules_of_origin/0406103010/NZ/wholly_obtained_definition');
    cy.contains('Regional Value Content');
    cy.contains('RVC');
    cy.contains('Build-Up Method');
  });
  it('UK - Remove Somoa(WS) from DCTS General & Enhanced Framework', function() {
    cy.visit('/rules_of_origin/0702000007?country=IN#rules-for-dcts-general-enhanced');
    cy.contains('Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    cy.should('not.contain', 'Somoa');
  });
});
