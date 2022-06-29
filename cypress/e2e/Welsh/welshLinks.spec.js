// Welsh language support service to be introduced
describe.skip('🏴󠁧󠁢󠁷󠁬󠁳󠁿 | welshLinks.spec.js | Welsh language support service', function() {
  it('UK Welsh translated link', function() {
    cy.visit('/cy/find_commodity');
    cy.get('.govuk-header__content').contains('UK Integrated Online Tariff in Welsh');
    cy.get('.govuk-caption-xl').contains('UK Integrated Online Tariff in Welsh');
    // switching link takes to XI welsh service 
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff in Welsh');
  });
  it('XI Welsh translated link', function() {
    cy.visit('xi/cy/find_commodity');
    cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff in Welsh');
    cy.get('.govuk-caption-xl').contains('Northern Ireland Online Tariff in Welsh');
    // switching link takes to UK welsh service
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff in Welsh');
  });
});
