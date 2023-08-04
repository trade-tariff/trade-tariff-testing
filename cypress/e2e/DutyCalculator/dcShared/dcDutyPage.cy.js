import dayjs from 'dayjs';

const currentDate = dayjs().format('DD MMMM YYYY');

describe('🧮 | dcDutyPage | Duties Calculated - page |', function() {
  it('Final Duty Calculation page', function() {
    // import date
    cy.visit('/duty-calculator/uk/7202118000/import-date');
    //   cy.visit('/import-date?referred_service=uk&commodity_code=7202118000')
    cy.validDate();
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
    // EU Duties apply
    cy.euDutiesApply();
    // monetary value
    cy.get('input#steps-customs-value-monetary-value-field').clear();
    cy.get('input#steps-customs-value-monetary-value-field').type('5000.50');
    cy.get('input#steps-customs-value-shipping-cost-field').clear();
    cy.get('input#steps-customs-value-shipping-cost-field').type('455.7533');
    cy.get('input#steps-customs-value-insurance-cost-field').clear();
    cy.get('input#steps-customs-value-insurance-cost-field').type('4545.987654');
    cy.contains('Continue').click();

    // confirm
    cy.get('.govuk-button').click();

    // duty page
    cy.contains('Import duty calculation');
    cy.contains('You are importing commodity');
    cy.contains('from United Kingdom (excluding Northern Ireland) on');
    cy.contains(`${currentDate}`);
    cy.contains('7202 11 80 00').click();
    cy.checkCommPage('7202118000');
    cy.go('back');
    // keys
    cy.get('.govuk-details > .govuk-details__summary');
    cy.contains('Details of your trade').click();
    cy.get('.govuk-details__text');
    cy.contains('Origin:');
    cy.contains('Commodity:');
    cy.contains('Import date:');
    cy.contains('Valuation of import:');
    // values
    cy.contains('7202 11 80 00');
    cy.contains('Other');
    cy.contains(`${currentDate}`);
    cy.contains('£10,002.24');

    // information
    cy.contains('Third-country duty');
    cy.get('.govuk-table__row');
    cy.contains('Data');
    cy.contains('Calculation');
    cy.contains('Value');
    // first row
    cy.contains('Valuation for import');
    cy.contains('Value of goods + freight + insurance costs');
    cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£10,002.24');
    // import duty
    cy.contains('Import duty Third-country duty (EU)');
    cy.contains('2.70% * £10,002.24');
    cy.get('tr:nth-of-type(2) > td:nth-of-type(3)').contains('£270.06');
    cy.get('tr:nth-of-type(3) > td:nth-of-type(3)').contains('£2,000.45');
    // Last row
    cy.contains('Duty Total');
    cy.contains('A ‘Third country’ duty is the tariff charged where there isn’t a trade agreement or a customs union available.');
    cy.contains('It can also be referred to as the Most Favoured Nation (MFN) rate.');

    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
    cy.contains('Option 3: Claiming a waiver – Exchange rate');
  });
});
