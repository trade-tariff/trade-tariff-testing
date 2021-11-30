/* eslint-disable new-cap */
/* eslint-disable max-len */
describe('🇪🇺 💡 | datePage.spec.js | date page on Chapter , Heading and Commodity page|', function() {
  const country = ['uk', 'xi'];
  const titles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];
  for (let i = 0; i < country.length; i++) {
    it(`${country[i]} Commodity page `, function() {
      cy.visit(`${country[i]}/commodities/6406905010?day=31&month=12&year=2021`);
      cy.contains('31 December 2021');
      // Change date
      cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
      console.log(cy.title());
      cy.title().should('eq', `${titles[i]} - When will your goods be traded - GOV.UK`);
      cy.contains('As commodities, duties and quotas change over time, it may be important to enter the date you think your goods will be traded. Use the format day, month, year, for example 27 3 2021. If you don\'t enter a date, today\'s date will be used.');
      cy.contains('Click on \'Cancel\' to return to the previous page.');
      // Cancel
      cy.get('.govuk-link').contains('Cancel').click();
      cy.contains('Commodity 6406905010');
      cy.contains('31 December 2021');
      // change date to future date
      cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
      cy.datePickerPage({day: 22, month: 12, year: 2022});
      cy.contains('22 December 2022');
      // change date to future date
      cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
      cy.datePickerPage({day: 22, month: 10, year: 2021});
      cy.contains('22 October 2021');
    });
    it(` ${country[i]} Heading page `, function() {
      cy.visit(`${country[i]}/headings/4302?day=31&month=12&year=2021`);
      cy.contains('31 December 2021');
      // Change date
      cy.get('.govuk-summary-list .govuk-link').click();
      cy.title().should('eq', `${titles[i]} - When will your goods be traded - GOV.UK`);
      cy.contains('As commodities, duties and quotas change over time, it may be important to enter the date you think your goods will be traded. Use the format day, month, year, for example 27 3 2021. If you don\'t enter a date, today\'s date will be used.');
      cy.contains('Click on \'Cancel\' to return to the previous page.');
      // Cancel
      cy.get('.govuk-link').contains('Cancel').click();
      cy.contains('Heading 4302');
      cy.contains('31 December 2021');
      // change date to future date
      cy.get('.govuk-summary-list .govuk-link').click();
      cy.datePickerPage({day: 22, month: 12, year: 2022});
      cy.contains('22 December 2022');
      // change date to future date
      cy.get('.govuk-summary-list .govuk-link').click();
      cy.datePickerPage({day: 22, month: 10, year: 2021});
      cy.contains('22 October 2021');
    });
    it(`${country[i]} Chapter page `, function() {
      cy.visit(`${country[i]}/chapters/43?day=31&month=12&year=2021`);
      cy.contains('31 December 2021');
      // Change date
      cy.get('.govuk-summary-list .govuk-link').click();
      cy.title().should('eq', `${titles[i]} - When will your goods be traded - GOV.UK`);
      cy.contains('As commodities, duties and quotas change over time, it may be important to enter the date you think your goods will be traded. Use the format day, month, year, for example 27 3 2021. If you don\'t enter a date, today\'s date will be used.');
      cy.contains('Click on \'Cancel\' to return to the previous page.');
      // Cancel
      cy.get('.govuk-link').contains('Cancel').click();
      cy.contains('Chapter 43 - Furskins and artificial fur; manufactures thereof');
      cy.contains('31 December 2021');
      // change date to future date
      cy.get('.govuk-summary-list .govuk-link').click();
      cy.datePickerPage({day: 22, month: 12, year: 2022});
      cy.contains('22 December 2022');
      // change date to future date
      cy.get('.govuk-summary-list .govuk-link').click();
      cy.datePickerPage({day: 22, month: 10, year: 2021});
      cy.contains('22 October 2021');
    });
    it(`${country[i]} Page validation `, function() {
      cy.visit(`${country[i]}/commodities/6406905010?day=31&month=12&year=2021`);
      cy.contains('31 December 2021');
      // change date invalid
      cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
      cy.datePickerPage({day: '00', month: '00', year: '0000'});
      cy.contains('Enter a valid date');
      cy.get('.govuk-error-message')
          .contains('Enter a valid date');
      // change date invalid - alphabets
      cy.get('.govuk-link').contains('Cancel').click();
      cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
      cy.datePickerPage({day: 'dd', month: 'mm', year: 'yyyy'});
      cy.contains('Enter a valid date');
      cy.get('.govuk-error-message')
          .contains('Enter a valid date');
      // change date to more than 4 characters
      cy.get('.govuk-link').contains('Cancel').click();
      cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
      cy.datePickerPage({day: '222', month: '88', year: '99999'});
      cy.contains('Enter a valid date');
      cy.get('.govuk-error-message')
          .contains('Enter a valid date');
    });
  }
});
