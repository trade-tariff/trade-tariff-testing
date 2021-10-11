/* eslint-disable no-unused-vars */
describe('💷 💶 | dcExchangeRate | Validating exchange rates , past and future dates |', function() {
  it('Exchange rate validations ', function() {
    const days = ['1', '1', '1', '13'];
    const months = ['1', '3', '10', '12'];
    const years = ['2021', '2021', '2021', '2022'];
    const exchangerates = ['0.9086', '0.8705', '0.8595', '0.8595'];

    for (let i =0; i<days.length; i++) {
      cy.visit('/duty-calculator/uk/7202118000/import-date');
      cy.enterDate({day: `${days[i]}`, month: `${months[i]}`, year: `${years[i]}`});

      cy.contains('Continue').click();
      // destination
      cy.get('#steps-import-destination-import-destination-xi-field').check();
      cy.contains('Continue').click();
      // origin
      cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click();
      cy.contains('Continue').click();
      // trader scheme
      cy.get('div:nth-of-type(2) > input[name=\'steps_trader_scheme[trader_scheme]\']').check();
      cy.contains('Continue').click();
      // certificate
      cy.get('input#steps-certificate-of-origin-certificate-of-origin-no-field').check();
      cy.contains('Continue').click();
      // monetary value
      cy.get('input#steps-customs-value-monetary-value-field').clear().type('1000');
      cy.contains('Continue').click();
      // confirm
      cy.get('.govuk-button').click();
      cy.contains(`${exchangerates[i]}`);
    }

    /*
      // Exchange Rate
      cy.request({
        method: 'GET',
        url: `https://www.trade-tariff.service.gov.uk/xi/api/v2/monetary_exchange_rates/`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        // console.log(JSON.stringify(response.body))
        const exchangerate = response.body.data[69].attributes.exchange_rate;
        const m = parseFloat(exchangerate).toFixed(4);
        //   let n = exchangerate.toFixed(3)
        // Updated on 1st October - change to dynamic
        const startdate = response.body.data[69].attributes.validity_start_date;
        console.log(startdate);
        console.log(m);
        cy.contains(m);
        cy.contains(`Please note - the current page uses an exchange rate of`);
        cy.contains('GBP to EUR.');
      });
    */
  });
});
