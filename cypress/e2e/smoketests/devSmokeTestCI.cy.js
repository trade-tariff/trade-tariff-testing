describe('Smoke tests for dev', function() {
  context('when on the UK service', function() {
    it('Main Page Validation', function() {
      cy.visit('/find_commodity');
      cy.mainPageUK();
      cy.contains('browse the goods classification').click();
      cy.contains('Browse the tariff');
    });
    it('Check date picker function is working', function() {
      cy.visit('/find_commodity');

      cy.get('#tariff_date_day').click().clear().type(21);
      cy.get('#tariff_date_month').click().clear().type(12);
      cy.get('#tariff_date_year').click().clear().type(2022);
      cy.searchForCommodity('3808941000');
      cy.contains(/Commodity .*3808941000/i);
      cy.contains('21 December 2022');

      cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
      cy.datePickerPage({day: 22, month: 12, year: 2022});
      cy.contains('22 December 2022');
    });

    it('Main Page - Switching link to XI available & works', function() {
      cy.visit('/find_commodity');
      cy.get('.govuk-header').contains('UK Integrated Online Tariff');
      cy.get('.govuk-main-wrapper')
          .contains('Northern Ireland Online Tariff')
          .click();
      cy.get('.govuk-header').contains('Northern Ireland Online Tariff');

      cy.get('.govuk-main-wrapper');
      cy.contains('UK Integrated Online Tariff').click();
      cy.get('.govuk-header').contains('UK Integrated Online Tariff');
      cy.get('.govuk-main-wrapper').contains('Northern Ireland Online Tariff');
    });
  });

  context('when on the XI service', function() {
    it('Main Page Validation', function() {
      cy.visit('/xi/sections');
      cy.mainPageXI();
      cy.contains('browse the goods classification').click();
      cy.contains('Browse the tariff');
    });

    it('Check Calendar is functioning', function() {
      cy.visit('/xi/sections');

      cy.get('.govuk-details__summary').click();
      cy.get('#tariff_date_day').click().clear().type(21);
      cy.get('#tariff_date_month').click().clear().type(12);
      cy.get('#tariff_date_year').click().clear().type(2022);
      cy.searchForCommodity('3808941000');
      cy.contains(/Commodity .*3808941000/i);

      cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
      cy.datePickerPage({day: 22, month: 12, year: 2022});

      cy.contains('22 December 2022');
    });

    it('Main Page - Switching link to UK available & works', function() {
      cy.visit('/xi/sections');
      cy.get('.govuk-header').contains('Northern Ireland Online Tariff');

      cy.get('.govuk-main-wrapper')
          .contains('UK Integrated Online Tariff')
          .click();
      cy.get('.govuk-header').contains('UK Integrated Online Tariff');
      cy.get('.govuk-main-wrapper');
      cy.contains('Northern Ireland Online Tariff').click();
      cy.get('.govuk-header').contains('Northern Ireland Online Tariff');
      cy.get('.govuk-main-wrapper').contains('UK Integrated Online Tariff');
    });
  });


  it('Change date and verify if the data shown is same for both XI and UK', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-details__summary').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2023);

    cy.searchForCommodity('3808941000');
    cy.contains(/Commodity .*3808941000/i);
    cy.contains('21 December 2023');

    cy.contains('Northern Ireland Online Tariff').click();
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('21 December 2023');
    cy.contains('UK Integrated Online Tariff').click();
    cy.contains('21 December 2023');
  });
});
