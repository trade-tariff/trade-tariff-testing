describe('🧮 🔖 | dcCommCodeinfo | Commodity code information on all pages consistent |', function() {
  // check comm code information on every page is rendered correctly
  it(`Commodity Information on all pages is consistent `, function() {
    cy.visit('/duty-calculator/uk/0702001007/import-date');
    cy.get('.govuk-details > .govuk-details__summary');
    cy.contains('About this commodity code').click();
    cy.get('.govuk-details__text');
    cy.contains('Commodity code');
    cy.contains('0702001007');
    cy.contains('Cherry tomatoes');
    cy.get('.govuk-details  .govuk-link').click();
    cy.checkCommPage('0702001007');
    cy.go('back');

    cy.validDate();
    cy.get('.govuk-details > .govuk-details__summary');
    cy.contains('About this commodity code').click();
    cy.get('.govuk-details__text');
    cy.contains('Commodity code');
    cy.contains('0702001007');
    cy.contains('Cherry tomatoes');
    cy.get('.govuk-details  .govuk-link').click();
    cy.checkCommPage('0702001007');
    cy.go('back');

    cy.selectDestination('xi');
    cy.get('.govuk-details > .govuk-details__summary');
    cy.contains('About this commodity code').click();
    cy.get('.govuk-details__text');
    cy.contains('Commodity code');
    cy.contains('0702001007');
    cy.contains('Cherry tomatoes');
    cy.get('.govuk-details  .govuk-link').click();
    cy.checkCommPage('0702001007');
    cy.go('back');


    cy.selectOrigin('gb');
    cy.get('.govuk-details > .govuk-details__summary');
    cy.contains('About this commodity code').click();
    cy.get('.govuk-details__text');
    cy.contains('Commodity code');
    cy.contains('0702001007');
    cy.contains('Cherry tomatoes');
    cy.get('.govuk-details  .govuk-link').click();
    cy.checkCommPage('0702001007');
    cy.go('back');

    cy.traderScheme('no');
    cy.get('.govuk-details > .govuk-details__summary');
    cy.contains('About this commodity code').click();
    cy.get('.govuk-details__text');
    cy.contains('Commodity code');
    cy.contains('0702001007');
    cy.contains('Cherry tomatoes');
    cy.get('.govuk-details  .govuk-link').click();
    cy.checkCommPage('0702001007');
    cy.go('back');


    cy.certificate('no');
    // duties apply page
    cy.euDutiesApply();

    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
    cy.get('.govuk-details > .govuk-details__summary');
    cy.contains('About this commodity code').click();
    cy.get('.govuk-details__text');
    cy.contains('Commodity code');
    cy.contains('0702001007');
    cy.contains('Cherry tomatoes');
    cy.get('.govuk-details  .govuk-link').click();
    cy.checkCommPage('0702001007');
    cy.go('back');

    cy.quantity({kgm: '23.98'});
  });
});
