describe('measure type preference codes', function() {
  it('should generate a link that is navigatable', function() {
    cy.visit('/commodities/1516209821');

    cy.get('#measure-20001695 > td > span > a')
        .contains('Third country duty')
        .should(
            'have.attr',
            'href',
            '/measure_types/103/preference_codes/100?geographical_area_id=1011',
        )
        .click();

    cy.url().should(
        'include',
        '/measure_types/103/preference_codes/100?geographical_area_id=1011',
    );
  });
  it('preference code - show 140 when country is selected as china', function() {
    cy.visit('/commodities/8714995019?country=CN#');

    cy.get('#measure-20012253 > td > span > a')
        .contains('Third country duty')
        .should(
            'have.attr',
            'href',
            '/measure_types/103/preference_codes/140?country=CN&geographical_area_id=1011',
        )
        .click();
    cy.get('#content > a').contains('8714995019');
    cy.get('#main-content > div').contains('103');
    cy.get('#main-content > div').contains('140');
  });
  it('preference code - show 100 when no country is selected', function() {
    cy.visit('/commodities/8714995019');

    cy.get('#measure-20012253 > td > span > a')
        .contains('Third country duty')
        .should(
            'have.attr',
            'href',
            '/measure_types/103/preference_codes/100?geographical_area_id=1011',
        )
        .click();
    cy.get('#content > a').contains('8714995019');
    cy.get('#main-content > div').contains('103');
    cy.get('#main-content > div').contains('100');
  });
  it('preference code - show 100 when country is selected other than china', function() {
    cy.visit('/commodities/8714995019?country=AD#');

    cy.get('#measure-20012253 > td > span > a')
        .contains('Third country duty')
        .should(
            'have.attr',
            'href',
            '/measure_types/103/preference_codes/100?country=AD&geographical_area_id=1011',
        )
        .click();
    cy.get('#content > a').contains('8714995019');
    cy.get('#main-content > div').contains('103');
    cy.get('#main-content > div').contains('100');
  });
});
