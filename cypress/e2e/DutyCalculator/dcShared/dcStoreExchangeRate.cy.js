describe('🚀 | dcStoreExchangeRate.spec.js | validate Euro-GBP exchange rate |', function() {
  beforeEach(function() {
    cy.storeMonetaryExchangeRates();
  });

  it('exchange rate Euro-GBP', function() {
    cy.getExchangeRateForImportDate('2022-05-01').then(
        (exchangeRate) => console.log(exchangeRate.attributes.exchange_rate),
    );
  });
});
