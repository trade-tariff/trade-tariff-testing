 
describe('🧮 📅 | dcImportDate | Duty Calculator main page |', function() {
  const country = ['uk', 'xi'];
  const pagetitles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];

  for (let i = 0; i < country.length; i++) {
    it(`📅 Valid Date ${country[i]}`, function() {
      cy.visit(`duty-calculator/${country[i]}/0702000007/import-date`);

      cy.contains(`${pagetitles[i]}`);
      cy.dcMainPage();
      cy.contains('As duties and quotas change over time, it may be important to enter the date you think your goods your goods will be imported.');
      cy.contains('Enter a date from 1 January 2021, or later.');
      cy.contains('Use the format day, month, year. For example, 27 3 2021.');
      cy.contains('The duties shown in this service are dependent on both of these:');
      cy.contains('the data you enter');
      cy.contains('the tariff information that has been supplied');
      cy.contains('It is possible that this data will change over time.');
      cy.validDate();
      cy.contains('Continue').click();
      cy.contains('Which part of the UK are you importing into?');
    });

    it(`📅 Invalid date - Past Date -> Date persists -> enter valid date ${country[i]}`, function() {
      cy.visit(`duty-calculator/${country[i]}/0702000007/import-date`);
      cy.contains(`${pagetitles[i]}`);
      cy.get('#steps_import_date_import_date_3i').click();
      cy.get('#steps_import_date_import_date_3i').clear();
      cy.get('#steps_import_date_import_date_3i').type('11');
      cy.get('#steps_import_date_import_date_2i').click();
      cy.get('#steps_import_date_import_date_2i').clear();
      cy.get('#steps_import_date_import_date_2i').type('12');
      cy.get('#steps_import_date_import_date_1i').click();
      cy.get('#steps_import_date_import_date_1i').clear();
      cy.get('#steps_import_date_import_date_1i').type('2020');
      cy.contains('Continue').click();
      cy.get('.govuk-error-summary');
      cy.contains('There is a problem');
      cy.contains('Enter a valid date, no earlier than 1st January 2021');
      cy.get('.govuk-error-message')
          .contains('Enter a valid date, no earlier than 1st January 2021');

      // 30th February ?
      // date entered persists after error message only if valid format date and in past *
      cy.get('#steps-import-date-import-date-field-error').should('have.value', '11');
      cy.get('#steps_import_date_import_date_2i').should('have.value', '12');
      cy.get('#steps_import_date_import_date_1i').should('have.value', '2020');

      // check if it allows user to enter correct date ( leap year 2024)
      cy.get('input[name=\'steps_import_date[import_date(3i)]\']').click();
      cy.get('input[name=\'steps_import_date[import_date(3i)]\']').clear();
      cy.get('input[name=\'steps_import_date[import_date(3i)]\']').type('29');
      cy.get('input[name=\'steps_import_date[import_date(2i)]\']').click();
      cy.get('input[name=\'steps_import_date[import_date(2i)]\']').clear();
      cy.get('input[name=\'steps_import_date[import_date(2i)]\']').type('02');
      cy.get('input[name=\'steps_import_date[import_date(1i)]\']').click();
      cy.get('input[name=\'steps_import_date[import_date(1i)]\']').clear();
      cy.get('input[name=\'steps_import_date[import_date(1i)]\']').type('2024');
      cy.contains('Continue').click();
      cy.contains('Which part of the UK are you importing into?');
    });
    it(`📅 No Date ${country[i]}`, function() {
      cy.visit(`duty-calculator/${country[i]}/0702000007/import-date`);
      cy.contains(`${pagetitles[i]}`);
      cy.contains('Continue').click();
      cy.get('.govuk-error-summary');
      cy.contains('There is a problem');
      cy.contains('Enter a valid date, no earlier than 1st January 2021');
      cy.get('.govuk-error-message');
      cy.contains('Enter a valid date, no earlier than 1st January 2021');
    });
    it(`📅 Invalid date - Text ${country[i]} `, function() {
      cy.visit(`duty-calculator/${country[i]}/0702000007/import-date`);
      cy.contains(`${pagetitles[i]}`);
      cy.get('#steps_import_date_import_date_3i').click();
      cy.get('#steps_import_date_import_date_3i').clear();
      cy.get('#steps_import_date_import_date_3i').type('dd');
      cy.get('#steps_import_date_import_date_2i').click();
      cy.get('#steps_import_date_import_date_2i').clear();
      cy.get('#steps_import_date_import_date_2i').type('mm');
      cy.get('#steps_import_date_import_date_1i').click();
      cy.get('#steps_import_date_import_date_1i').clear();
      cy.get('#steps_import_date_import_date_1i').type('yyyy');
      cy.contains('Continue').click();
      cy.get('.govuk-error-summary');
      cy.contains('There is a problem');
      cy.contains('Enter a valid date, no earlier than 1st January 2021');
      cy.get('.govuk-error-message');
      cy.contains('Enter a valid date, no earlier than 1st January 2021');
    });
    it(`🔗 Verify Page links ${country[i]}`, function() {
      cy.visit(`duty-calculator/${country[i]}/0702000007/import-date`);

      cy.get('.govuk-header__link')
          .contains('Search').click();

      cy.contains(`${pagetitles[i]}`);
      cy.get('.govuk-header__link')
          .contains('Browse').click();

      cy.contains(`${pagetitles[i]}`);
      cy.get('.govuk-header__navigation');
      cy.contains('A-Z').click();
      cy.reload();
      cy.contains('A–Z of Classified Goods');
      cy.get('.govuk-header').contains(`${pagetitles[i]}`);
      // DC main page
      cy.visit(`duty-calculator/${country[i]}/0702000007/import-date`);
      cy.contains(`${pagetitles[i]}`);
      cy.contains('Tools').click();
      cy.get('.govuk-header').contains(`${pagetitles[i]}`);
      cy.contains('Tariff tools');
    });
    it(`🔖 Commodity Details ${country[i]}`, function() {
      cy.visit(`duty-calculator/${country[i]}/0702000007/import-date`);

      cy.contains(`${pagetitles[i]}`);
      // Back button - GDS style back link
      cy.contains('Back').click();
      // Validate commodity page
      cy.checkCommPage('0702000007');
      cy.visit(`duty-calculator/${country[i]}/0702000007/import-date`);
      // About this commodity code
      cy.get('.govuk-details > .govuk-details__summary');
      cy.contains('About this commodity code').click();
      cy.get('.govuk-details__text');
      cy.contains('Commodity code');
      cy.contains('0702000007');
      cy.contains('Cherry tomatoes');

      cy.contains('View commodity 0702000007').click();
      // ☀️ Validate commodity page
      cy.checkCommPage('0702000007');
      cy.get('.govuk-header').contains(`${pagetitles[i]}`);
      cy.go('back');
      cy.contains('When will the goods be imported?');
      cy.contains(`${pagetitles[i]}`);
    });
  }
});
