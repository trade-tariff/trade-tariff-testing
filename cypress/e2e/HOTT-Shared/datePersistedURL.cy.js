/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
describe('UK 🇬🇧 XI 🇪🇺 💡 | 📅 datePersistedURL.spec | 🐞 HOTT-329 , HOTT-1326 | date change persisted on URL |', function() {
  // Bug : https://transformuk.atlassian.net/browse/HOTT-329
  // Bug : https://transformuk.atlassian.net/browse/HOTT-1326
  let countries = [''];

  it(' Date persisted on import ', function() {
    cy.visit(`/sections`);
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.searchForCommodity('0702000007');
    cy.title().should('contains', '0702000007');
    cy.checkCommPage('0702000007');
    // change date to future date
    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 22, month: 12, year: 2022});
    cy.contains('22 December 2022');
    cy.url().should('include', 'day=22&month=12&year=2022');

    // select import tab
    cy.get('a#tab_import').click();
    cy.get('.govuk-main-wrapper')
        .contains('Importing into the UK');
    // select country from drop down list
    cy.get('input#trading_partner_country').click().clear()
        .type('Chile')
        .type('{enter}');
    // verify if the date is persisted
    cy.get('a#tab_import').click();
    // cy.contains('Now you have identified your commodity code, you can check how to import commodity 0702000007 from Chile.');
    cy.url().should('include', 'day=22&month=12&year=2022');

    // Change to different date in past and validate date is persisted
    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 1, month: 1, year: 2022});

    cy.contains('1 January 2022');
    cy.url().should('include', 'day=1&month=1&year=2022');


    // select import tab
    cy.get('a#tab_import').click();
    cy.get('.govuk-main-wrapper')
        .contains('Importing into the UK');
    // select country from drop down list
    cy.get('input#trading_partner_country').click().clear()
        .type('Chile')
        .type('{enter}');
    cy.get('a#tab_import').click();
    // verify if the date is persisted
    // cy.contains('Now you have identified your commodity code, you can check how to import commodity 0702000007 from Chile.');
    cy.contains('1 January 2022');
    cy.url().should('include', 'day=1&month=1&year=2022');


    // switch to XI and check date is persisted on URL and UI
    cy.contains('Northern Ireland Online Tariff').click();
    cy.contains('1 January 2022');
    cy.url().should('include', 'day=1&month=1&year=2022');
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
    cy.datePickerPage({day: 22, month: 12, year: 2022});

    cy.contains('22 December 2022');
    cy.url().should('include', 'day=22&month=12&year=2022');

    // select country from drop down list
    cy.get('input#trading_partner_country').click().clear()
        .type('Chile')
        .type('{enter}');
    // verify if the date is persisted
    cy.get('a#tab_export').click();
    // cy.contains('Now you have identified your commodity code, you can check how to import commodity 0702000007 from Chile.');
    cy.url().should('include', 'day=22&month=12&year=2022');

    // Change to different date in past and validate date is persisted
    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 1, month: 1, year: 2022});

    cy.contains('1 January 2022');
    cy.url().should('include', 'day=1&month=1&year=2022');


    // select import tab
    cy.get('a#tab_export').click();
    cy.get('.govuk-main-wrapper')
        .contains('Check how to export commodity goods (link opens in new tab)');
    // select country from drop down list
    cy.get('input#trading_partner_country').click().clear()
        .type('Chile')
        .type('{enter}');
    // verify if the date is persisted
    cy.get('a#tab_export').click();
    cy.contains('Check how to export commodity goods (link opens in new tab)');

    cy.contains('1 January 2022');
    cy.url().should('include', 'day=1&month=1&year=2022');
  });
  it(' Date persisted on all pages ', function() {
    const pages = ['chapters/01', 'headings/0101', 'commodities/0101210000'];
    const titles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];
    for (let j=0; j<countries.length; j++) {
      for (let i = 0; i < pages.length; i++) {
        cy.visit(`${countries[j]}/sections`);
        cy.get('a#proposition-name').contains(`${titles[j]}`);
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
        cy.datePickerPage({day: 22, month: 12, year: 2022});

        cy.contains('22 December 2022');
        cy.url().should('include', 'day=22&month=12&year=2022');
      }
    }
  });
  // HOTT 1326
  it('Date persisted on page search - user searches for commodity which does not exist using page search', function() {
    // user navigates to heading for 9th Feb 2021
    cy.visit('/headings/8543?day=9&month=2&year=2021');
    cy.contains('9 February 2021');
    // user searched for commodity using page search
    cy.searchForCommodity2('8543700490');
    cy.contains('9 February 2021');
    cy.url().should('include', 'day=9&month=2&year=2021');
    // switch to XI service
    cy.get('.govuk-caption-xl  .govuk-link--no-underline').click();
    cy.contains('9 February 2021');
    cy.url().should('include', 'day=9&month=2&year=2021');
    //
    cy.searchForCommodity2('8543700490');
    cy.contains('9 February 2021');
    cy.url().should('include', 'day=9&month=2&year=2021');
  });
  it('Date persisted on all breadcrumb pages - commodity,heading,chapter,section,browse', function() {
    // user navigates to heading for 9th Feb 2021
    cy.visit('xi/headings/8543?day=9&month=2&year=2021');
    cy.contains('9 February 2021');
    // check date is persisted using breadcrumbs
    // user searched for commodity using page search
    cy.searchForCommodity2('8543700490');
    // Headings
    cy.get('li:nth-of-type(5) > .govuk-breadcrumbs__link').click();
    cy.contains('Heading 8543 - Electrical machines and apparatus, having individual functions, not specified or included elsewhere in this chapter');
    cy.contains('9 February 2021');
    cy.url().should('include', 'day=9&month=2&year=2021');
    // Chapters
    cy.get('li:nth-of-type(4) > .govuk-breadcrumbs__link').click();
    cy.contains('Chapter 85 - Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles');
    cy.contains('9 February 2021');
    cy.url().should('include', 'day=9&month=2&year=2021');
    // Sections
    cy.get('li:nth-of-type(3) > .govuk-breadcrumbs__link').click();
    cy.contains('Section XVI - Machinery and mechanical appliances; electrical equipment; parts thereof, sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles');
    cy.url().should('include', 'day=9&month=2&year=2021');
    // Browse
    cy.get('li:nth-of-type(2) > .govuk-breadcrumbs__link').click();
    cy.contains('Browse the tariff');
    cy.url().should('include', 'day=9&month=2&year=2021');
  });
});
