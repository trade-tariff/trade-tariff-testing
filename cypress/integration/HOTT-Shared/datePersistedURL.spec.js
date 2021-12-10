describe('UK 🇬🇧 XI 🇪🇺 💡 | 📅 datePersistedURL.spec | 🐞 HOTT-329 | date change persisted on URL |', function() {
  // Bug : https://transformuk.atlassian.net/browse/HOTT-329

  it(' Date persisted on import ', function() {
    cy.visit(`/sections`);
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.searchForCommodity('0702000007');
    cy.title().should('contains', '0702000007');
    cy.checkCommPage('0702000007');
    // change date to future date
    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 22, month: 12, year: 2021});
    cy.wait(300);
    cy.contains('22 December 2021');
    cy.url().should('include', 'day=22&month=12&year=2021');

    // select import tab
    cy.get('a#tab_import').click();
    cy.get('.govuk-main-wrapper')
        .contains('Import measures and restrictions');
    // select country from drop down list
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    // verify if the date is persisted
    cy.get('a#tab_import').click();
    cy.contains('Now you have identified your commodity code, you can check how to import commodity 0702000007 from Chile.');
    cy.url().should('include', 'day=22&month=12&year=2021');

    // Change to different date in past and validate date is persisted
    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 1, month: 1, year: 2021});
    cy.wait(300);
    cy.contains('1 January 2021');
    cy.url().should('include', 'day=1&month=1&year=2021');


    // select import tab
    cy.get('a#tab_import').click();
    cy.get('.govuk-main-wrapper')
        .contains('Import measures and restrictions');
    // select country from drop down list
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    cy.get('a#tab_import').click();
    // verify if the date is persisted
    cy.contains('Now you have identified your commodity code, you can check how to import commodity 0702000007 from Chile.');
    cy.contains('1 January 2021');
    cy.url().should('include', 'day=1&month=1&year=2021');


    // switch to XI and check date is persisted on URL and UI
    cy.contains('Northern Ireland Online Tariff').click().wait(300);
    cy.contains('1 January 2021');
    cy.url().should('include', 'day=1&month=1&year=2021');
  });
  it(' Date persisted on export ', function() {
    cy.visit(`/sections`);
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.searchForCommodity('0702000007');
    cy.title().should('contains', '0702000007');
    cy.checkCommPage('0702000007');
    // change date to future date
    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 22, month: 12, year: 2021});
    cy.wait(300);
    cy.contains('22 December 2021');
    cy.url().should('include', 'day=22&month=12&year=2021');

    // select country from drop down list
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    // verify if the date is persisted
    cy.get('a#tab_export').click();
    cy.contains('Now you have identified your commodity code, you can check how to import commodity 0702000007 from Chile.');
    cy.log(cy.url());
    cy.url().should('include', 'day=22&month=12&year=2021');

    // Change to different date in past and validate date is persisted
    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 1, month: 1, year: 2021});
    cy.wait(300);
    cy.contains('1 January 2021');
    cy.url().should('include', 'day=1&month=1&year=2021');


    // select import tab
    cy.get('a#tab_export').click();
    cy.get('.govuk-main-wrapper')
        .contains('Check how to export commodity goods (link opens in new tab)');
    // select country from drop down list
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    // verify if the date is persisted
    cy.get('a#tab_export').click();
    cy.contains('Check how to export commodity goods (link opens in new tab)');

    cy.contains('1 January 2021');
    cy.url().should('include', 'day=1&month=1&year=2021');
  });
  it(' Date persisted on all pages ', function() {
    const pages = ['chapters/01', 'headings/0101', 'commodities/0101210000'];
    for (let i = 0; i < pages.length; i++) {
      cy.visit('/sections');
      cy.contains('UK Integrated Online Tariff');
      // change date to future date
      // select Change Date and change months and years
      cy.get('.govuk-details__summary').click();
      cy.get('#tariff_date_day').click().clear().type(21);
      cy.get('#tariff_date_month').click().clear().type(12);
      cy.get('#tariff_date_year').click().clear().type(2022);
      cy.searchForCommodity('3808941000');
      cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
      cy.contains('21 December 2022');
      cy.visit(`/${pages[i]}`);

      // select Change Date and change months and years
      cy.get('.govuk-summary-list__actions').contains('Change').click();
      cy.datePickerPage({day: 22, month: 12, year: 2021});
      cy.wait(300);
      cy.contains('22 December 2021');
      cy.url().should('include', 'day=22&month=12&year=2021');
    }
  });
});
