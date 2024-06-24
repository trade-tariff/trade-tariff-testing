describe('measure type preference codes', function() {
  it('UK - Should generate a link that is navigable', function() {
    cy.visit('/commodities/1516209821');

    cy.get('#measure-20001695 > td > span > a')
        .contains('Third country duty')
        .should(
            'have.attr',
            'href',
            '/measure_types/103/preference_codes/100?geographical_area_id=1011&goods_nomenclature_code=1516209821',
        )
        .click();

    cy.url().should(
        'include',
        '/measure_types/103/preference_codes/100?geographical_area_id=1011&goods_nomenclature_code=1516209821',
    );
  });
  it('UK - Preference code - show 140 when country is selected as china', function() {
    cy.visit('/commodities/8714995019?country=CN#');

    cy.get('#measure-20012253 > td > span > a')
        .contains('Third country duty')
        .should(
            'have.attr',
            'href',
            '/measure_types/103/preference_codes/140?country=CN&geographical_area_id=1011&goods_nomenclature_code=8714995019',
        )
        .click();
    cy.get('#content > a').contains('8714995019');
    cy.get('#main-content > div').contains('103');
    cy.get('#main-content > div').contains('140');
  });
  it('UK - preference code - show 100 when no country is selected', function() {
    cy.visit('/commodities/8714995019');

    cy.get('#measure-20012253 > td > span > a')
        .contains('Third country duty')
        .should(
            'have.attr',
            'href',
            '/measure_types/103/preference_codes/100?geographical_area_id=1011&goods_nomenclature_code=8714995019',
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
            '/measure_types/103/preference_codes/100?country=AD&geographical_area_id=1011&goods_nomenclature_code=8714995019',
        )
        .click();
    cy.get('#content > a').contains('8714995019');
    cy.get('#main-content > div').contains('103');
    cy.get('#main-content > div').contains('100');
  });
  it('UK - Verify tariff preferences for DCTS schemes', function() {
    cy.visit('/commodities/6004100091');
    cy.get('a[href="#import_duties"]').contains('Import duties').click();

    // DCTS - Comprehensive Preferences
    cy.get('#measure-20205226').contains('Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences (1062)');
    cy.get('#measure-20205226').contains('Tariff preference').click();
    cy.verifyDCTSTariffPereferences('1062');

    // DCTS - Enhanced Preferences
    cy.get('#measure-20213921').contains('Developing Countries Trading Scheme (DCTS) - Enhanced Preferences (1061)');
    cy.get('#measure-20213921').contains('Tariff preference').click();
    cy.verifyDCTSTariffPereferences('1061');

    // DCTS - Standard Preferences
    cy.get('#measure-20212173').contains('Developing Countries Trading Scheme (DCTS) - Standard Preferences (1060)');
    cy.get('#measure-20212173').contains('Tariff preference').click();
    cy.verifyDCTSTariffPereferences('1060');
  });
});
