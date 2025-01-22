
// Interim mods to RoO for Ukraine - include additional text
describe('🇺🇦 | ukraineRoO.spec |', function() {
  const countries = [''];
  const service = ['UK', 'xi'];
  for (let i=0; i<countries.length; i++) {
    it(`| ${service[i]} RoO message on Ukraine`, function() {
      cy.visit(`${countries[i]}/commodities/0702001007?country=UA#rules-of-origin`);
      cy.contains('To qualify for preferential tariff treatment, you must meet the product-specific rules of origin under the UK-Ukraine Political')+
                 ('Free Trade and Strategic Partnership Agreement.');
      cy.contains('you do not need to apply for a preferential tariff (or comply with preferential rules of origin) if the MFN duty for your product is zero.');
    });
  }
});
