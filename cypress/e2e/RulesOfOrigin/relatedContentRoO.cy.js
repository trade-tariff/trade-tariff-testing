// HOTT- 954
describe('| relatedContentRoO - Related Content - links ', {tags: ['config', 'roo-tag']}, function() {
  it('| XI Service - EU Trading relations with Chile - Related Content |', function() {
    cy.visit('xi/commodities/0702000007');
    cy.pickTradingPartner('Chile');
    cy.contains('Rules of origin')
        .click();
    cy.contains('EU - Chile Association Agreement');
    cy.contains('Related content');
    cy.contains('Check your goods meet the rules of origin')
        .click();
    cy.contains('Find out the rules');
    cy.go('back');
    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(2) > a')
        .contains('Moving goods into, out of, or through Northern Ireland')
        .click();
    cy.contains('Moving goods into, out of, or through Northern Ireland.');

    cy.go('back');
    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(3) > a').contains('Rules of Origin - Daera').click();
    cy.contains('Since 1st January 2021, trading between the UK and the EU');
    cy.go('back');

    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(4) > a')
        .contains('Northern Ireland Protocol: application of EU preferential rules of origin');

    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(6) > a')
        .contains('The EU - Chile Association Agreement')
        .click();

    cy.contains('Agreement establishing an association between the European Community');
    cy.go('back');

    cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(5) > a')
        .contains('The EU\'s trading relationship with Chile')
        .click();

    cy.contains('EU trade relations with Chile. Facts, figures and latest developments.');
  });
});
