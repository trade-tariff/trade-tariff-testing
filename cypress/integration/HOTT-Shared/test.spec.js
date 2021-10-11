describe('🚀 | test.spec.js | Front end - mainpage |', function() {
  beforeEach(function() {
    cy.storeMonetaryExchangeRates();
  });

  it('🚀 UK 🇬🇧 - Main Page Validation', function() {
    // Main Page
    const importDate = new Date('2021-11-01');

    cy.getExchangeRateForImportDate(importDate).then(
        (exchangeRate) => console.log(exchangeRate.attributes.exchange_rate),
    );
  });
});
