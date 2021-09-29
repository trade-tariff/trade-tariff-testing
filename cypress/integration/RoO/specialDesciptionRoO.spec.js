/* eslint-disable max-len */
/*
{{CC}} - which means change in chapter
{{CTH}} - which means change in tariff heading
{{CTSH}} - which means change in tariff subheading
{{EXW}} - which means ex-works price
{{WO}} - which means wholly obtained
*/
describe('| specialDescriptionRoO - Rules with special descriptions ', function() {
  const service = [''];
  const commodity = ['7304110010', '7118100000', '7801100000','0301911000', '7113110000'];
  const descriptions = ['CC rule - change of chapter', 'CTH rule - change in tariff heading', 'CTSH rule - change in tariff subheading','Wholly obtained', 'Ex-works price'];
  for (let j=0; j<service.length; j++) {
    for (let i=0; i<commodity.length; i++) {
      it(`| ${service[j]} Service - ${descriptions[i]} |`, function() {
        cy.visit(`${service[j]}/commodities/${commodity[i]}`);
        cy.get('input#search_country').click().clear().wait(500)
            .type('Japan').wait(500)
            .type('{enter}');
        cy.contains('Rules of origin').click();
        cy.contains('Rules of origin for trading with Japan');
        cy.contains(`${descriptions[i]}`);
      });
    }
  }
});
