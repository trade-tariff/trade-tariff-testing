 
// Interim mods to RoO for Ukraine - include additional text
describe('🇺🇦 | ukraineRoO.spec |', function() {
  const countries = [''];
  const service = ['UK', 'xi'];
  for (let i=0; i<countries.length; i++) {
    it(`| ${service[i]} RoO message on Ukraine`, function() {
      cy.visit(`${countries[i]}/commodities/0702000007?country=UA#rules-of-origin`);
      cy.contains('In order to qualify for the lower or zero preferential tariff under the UK-Ukraine Political, Free Trade and Strategic Partnership Agreement, the product must originate in the territory of the exporting partner.');
      cy.contains('You do not need to apply for a preferential tariff (or comply with preferential rules of origin) if the MFN duty for your product is zero.');
    });
  }
});
