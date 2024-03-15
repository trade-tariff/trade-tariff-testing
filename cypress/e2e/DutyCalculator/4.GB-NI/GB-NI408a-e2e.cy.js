// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - 🚫 Trader Scheme - 🚫  Certified as UK origin
// Comm code :7202118000 - Commodity with no measure units

import dayjs from 'dayjs';
const currentDate = dayjs().format('DD MMMM YYYY');
describe('GB-NI408a-e2e.spec|GB to NI route08-Trade Remedies-0% MFN EU tariff-Trader Scheme-Certified as UK origin', function() {
  it('e2e GB to NI ', function () {
    // select future date
    cy.visit('/duty-calculator//uk/7202118000/import-date');
    cy.contains('UK Integrated Online Tariff');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('gb');
    // 🚫 Trader Scheme Registered - No
    cy.traderScheme('no');
    //  🚫 Certified as UK Origin
    cy.certificate('no');
    // interstitial page
    cy.euDutiesApply();
    // Monetary value page
    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
    // Check your answers page
    cy.contains('Check your answers');
    cy.contains('Commodity code');
    cy.contains('Date of import');
    cy.contains('Destination');
    cy.contains('Coming from');
    cy.contains('Trader scheme');
    cy.contains('Certificate of origin');
    cy.contains('Customs value');
    cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('7202 11 80 00');
    cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains(`${currentDate}`);
    cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('Northern Ireland');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('No');
    cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('No');
    cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('£10,002.24');
    // confirm
    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    // duty page
    cy.contains('Import duty calculation');
    cy.contains('You are importing commodity');
    cy.contains('from United Kingdom (excluding Northern Ireland) on');
    cy.contains(`${currentDate}`);
    cy.contains('7202 11 80 00').click();
    cy.checkCommPage('7202118000');
    cy.go('back');
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
    // Last row
    cy.contains('VAT');
    cy.contains('Duty Total');
    cy.get('tr:nth-of-type(3) > td:nth-of-type(3)').contains('£2,000.45');
    cy.get('tr:nth-of-type(4) > td:nth-of-type(3)').contains('£2,000.45');
    // Final Page
    cy.exchangeRate();
    cy.contains('Third-country duty');
    cy.contains('Tariff preference - United Kingdom (excluding Northern Ireland)');
    cy.contains('Claiming a waiver – Exchange rate');
  });
  it('e2e GB to NI - Meursing code ', function() {
    // select future date
    cy.visit('/duty-calculator/xi/1905311100/import-date');
    cy.contains('Northern Ireland Online Tariff');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('gb');
    // 🚫 Trader Scheme Registered - No
    cy.traderScheme('no');
    //  🚫 Certified as UK Origin
    cy.certificate('no');
    // interstitial page
    cy.euDutiesApply();
    cy.meursingCode({value: '000'});
    // Monetary value page
    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
    // Import Quantity
    cy.quantity({kgm: '1'});
    cy.vat('20');
    // Check your answers page
    cy.contains('Check your answers');
    cy.contains('Commodity code');
    cy.contains('Date of import');
    cy.contains('Destination');
    cy.contains('Coming from');
    cy.contains('Trader scheme');
    cy.contains('Certificate of origin');
    cy.contains('Customs value');
    cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('1905 31 11 00');
    cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains(`${currentDate}`);
    cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('Northern Ireland');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('No');
    cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('No');
    // confirm
    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    // duty page
    cy.contains('Import duty calculation');
    cy.contains('You are importing commodity');
    cy.contains('from United Kingdom (excluding Northern Ireland) on');
    cy.contains(`${currentDate}`);
    cy.contains('Third-country duty (EU)');
    cy.contains('9.00 % + EA MAX 24.20 % +ADSZ');
    cy.contains('9.00 % + 0.00 EUR / 100 kg MAX 24.20 % + 0.00 EUR / 100 kg');
    cy.contains('1905 31 11 00').click();
    cy.checkCommPage('1905311100');
    cy.go('back');
    // change meursing code to 7049
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(7) > .govuk-summary-list__actions > .govuk-link').click();
    cy.meursingCode({value: '049'});
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({kgm: '1'});
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('A tariff preference is the rate available if a free trade agreement or');
    cy.contains('another arrangement is in place between the UK and an overseas country.');
    cy.contains('Goods will need to comply with the rules of origin to benefit from this rate');
    cy.contains('and you will need to provide evidence of compliance with your shipment.');
  });
});


