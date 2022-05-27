/* eslint-disable max-len */
// Interim mods to RoO for Ukraine - include additional text
describe('🇺🇦 | ukraineRoO.spec |', function() {
  const countries = ['', 'xi'];
  const service = ['UK', 'xi'];
  for (let i=0; i<countries.length; i++) {
    it(`| ${service[i]} RoO message on Ukraine`, function() {
      cy.visit(`${countries[i]}/commodities/0702000007?country=UA#rules-of-origin`);
      cy.contains('Due to the ongoing situation in Ukraine, we recognise that some Ukrainian exporters, who do not hold Approved Exporter status and rely on EUR1 certificates to evidence the preferential origin of their goods, may not be able to obtain the duly endorsed certificates. In these cases, HMRC has introduced an easement enabling preference to be claimed by UK importers based on an unendorsed EUR1 certificate supported/or by alternative evidence that corroborates the originating status of the goods.');
      cy.contains('To claim preference under this easement UK importers must enter code \'9UKR\' in Box 44 of the customs declaration.');
    });
  }
});
