describe('measure type preference codes', function() {
  it('should generate a link that is navigable', function() {
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
});
