/* eslint-disable max-len */
// HOTT- 954 ,
describe('| relatedContentRoO - Related Content - links ', function() {
  it('| UK Service - UK Trading relations with Chile - Related Content |', function() {
    cy.visit('/commodities/0702000007');
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin').click();
    cy.contains('Trading relationship with Chile');
    cy.contains('UK-Chile association agreement');
    cy.contains('The UK has signed an association agreement with Chile, which is in effect.');
    cy.contains('Related content');
    cy.contains('Check your goods meet the rules of origin').click();
    cy.contains('Find out the rules to establish the country of origin of imported and exported goods and to help identify goods which qualify for lower or no Customs Duty.');
    cy.go('back');
    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(2) > a').contains('UK-Chile association agreement').click();
    cy.contains('Documents containing treaty information and a summary of the agreement on trade between the UK and Chile.');

    cy.go('back');
    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(3) > a').contains('Trade with Chile').click();
    cy.contains('How you import from and export to Chile.');
    cy.go('back');
  });
  it('| XI Service - EU Trading relations with Chile - Related Content |', function() {
    cy.visit('xi/commodities/0702000007');
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin').click();
    cy.contains('EU - Chile Association Agreement');
    cy.contains('Related content');
    cy.contains('Check your goods meet the rules of origin').click();
    cy.contains('Find out the rules to establish the country of origin of imported and exported goods and to help identify goods which qualify for lower or no Customs Duty.');
    cy.go('back');
    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(2) > a').contains('Moving goods into, out of, or through Northern Ireland').click();
    cy.contains('Moving goods into, out of, or through Northern Ireland.');

    cy.go('back');
    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(3) > a').contains('Rules of Origin - Daera').click();
    cy.contains('Since 1st January 2021, trading between the UK and the EU is now based on a new Free Trade Agreement (FTA) – the Trade and Cooperation Agreement (TCA). To benefit from the preferential tariffs (i.e. zero duty) under the TCA, goods will have to meet the Rules of Origin requirements stipulated in the agreement.');
    cy.go('back');

    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(4) > a').contains('Northern Ireland Protocol: application of EU preferential rules of origin').click();
    cy.contains('Northern Ireland Protocol: application of EU preferential rules of origin');
    cy.go('back');
    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(6) > a').contains('The EU - Chile Association Agreement').click();
    cy.contains('Agreement establishing an association between the European Community and its Member States, of the one part, and the Republic of Chile, of the other part - Final act');
    cy.go('back');

    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(5) > a').contains('The EU\'s trading relationship with Chile').click();
    cy.contains('Modernisation of the trade part of the EU - Chile Association Agreement');
  });
});
