/* eslint-disable no-unused-vars */
describe('💷 💶 | dcExchangeRate | Validating exchange rates , past and future dates |', function() {
  before(function() {
    cy.storeMonetaryExchangeRates();
  });

  it('Exchange rate validations ', function() {
    const importDates = [
      '2021-01-01',
      '2021-03-01',
      '2021-10-01',
      '2022-12-13',
    ];

    for (let i =0; i<importDates.length; i++) {
      const importDateString = importDates[i];
      const importDate = new Date(importDateString);
      const importYear = importDate.getFullYear();
      const importMonth = importDate.getMonth() + 1;
      const importDay = importDate.getDate();

      cy.visit('/duty-calculator/uk/7202118000/import-date');
      cy.enterDate({day: importDay, month: importMonth, year: importYear});

      // destination
      cy.get('#steps-import-destination-import-destination-xi-field').check();
      cy.contains('Continue').click();
      // origin
      cy.get('#steps-country-of-origin-country-of-origin-gb-field').click();
      cy.contains('Continue').click();
      // trader scheme
      cy.get('div:nth-of-type(2) > input[name=\'steps_trader_scheme[trader_scheme]\']').check();
      cy.contains('Continue').click();
      // certificate
      cy.get('input#steps-certificate-of-origin-certificate-of-origin-no-field').check();
      cy.contains('Continue').click();
      console.log(cy.title());
      // interstitial page
      cy.dutiesApply1();
      // monetary value
      cy.get('input#steps-customs-value-monetary-value-field').clear().type('1000');
      cy.contains('Continue').click();
      // confirm
      cy.get('.govuk-button').click();
      cy.getExchangeRateForImportDate(importDateString).then(
          (exchangeRate) => {
          // const rate = parseFloat(exchangeRate.attributes.exchange_rate).toPrecision(4);
            const rate1 = parseFloat(exchangeRate.attributes.exchange_rate);

            const rate = Math.round(rate1*10000)/10000;

            console.log(rate);
            cy.contains(rate);
          },
      );
    }
  });
});
