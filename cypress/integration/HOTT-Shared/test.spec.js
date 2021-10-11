describe.skip('🚀 | test.spec.js | Front end - mainpage |', function() {
  beforeEach(function() {
    cy.storeMonetaryExchangeRates();
  });

  it('🚀 UK 🇬🇧 - Main Page Validation', function() {
    // Main Page
    cy.getExchangeRateForImportDate('2021-11-01').then(
        (exchangeRate) => console.log(exchangeRate.attributes.exchange_rate),
    );
  });
});
