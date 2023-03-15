/* eslint-disable max-len */
describe('| vatExciseBlob.spec | VAT and Excise blob on UK |', function() {
  const country = ['xi', 'uk'];
  for (let i=0; i<country.length; i++) {
    it(`${country[i]} Multiple excise rates, single VAT rate`, function() {
      cy.visit(`${country[i]}/commodities/2203000100`);
      cy.get('h3#vat_excise').contains('Import VAT and excise');
      cy.get('.measure-inset.vat-excise-panel').contains('Goods are subject to an import VAT rate of 20.00%');
      cy.contains('Excise duties apply to the import of commodity 2203000100.');
      cy.get('.measure-inset.vat-excise-panel').contains('Excise duties').click();
      cy.contains('UK Trade Tariff: excise duties, reliefs, drawbacks and allowances');
    });
    it(`${country[i]} Multiple VAT rates - 2, but no excise`, function() {
      cy.visit(`${country[i]}/commodities/6101201000`);
      cy.get('h3#vat_excise').contains('Import VAT and excise');
      cy.get('.measure-inset.vat-excise-panel').contains('An import VAT rate of 20.00% or 0.00% may apply if certain conditions are met.');
      cy.contains('Read more about VAT rates on different goods and services and the conditions that apply to these rates.');
      cy.contains('Excise duties are not chargeable on this commodity.');
      cy.get('.measure-inset.vat-excise-panel').contains('Excise duties').click();
      cy.contains('UK Trade Tariff: excise duties, reliefs, drawbacks and allowances');
    });
    //
    it(`${country[i]} Multiple VAT rates - 3, but no excise`, function() {
      cy.visit(`${country[i]}/commodities/8716109800`);
      cy.get('h3#vat_excise').contains('Import VAT and excise');
      cy.get('.measure-inset.vat-excise-panel').contains('An import VAT rate of 20.00%, 5.00% or 0.00% may apply if certain conditions are met.');
      cy.get('.measure-inset.vat-excise-panel').contains('Excise duties are not chargeable on this commodity.');
      cy.get('.measure-inset.vat-excise-panel').contains('Excise duties').click();
      cy.contains('UK Trade Tariff: excise duties, reliefs, drawbacks and allowances');
    });
    it(`${country[i]} Single VAT rate, but no excise`, function() {
      cy.visit(`${country[i]}/commodities/0702000007`);
      cy.get('h3#vat_excise').contains('Import VAT and excise');
      cy.get('.measure-inset.vat-excise-panel').contains('Goods are subject to an import VAT rate of 0.00%');
      cy.get('.measure-inset.vat-excise-panel').contains('Excise duties are not chargeable on this commodity.');
      cy.get('.measure-inset.vat-excise-panel').contains('Excise duties').click();
      cy.contains('UK Trade Tariff: excise duties, reliefs, drawbacks and allowances');
    });
  }
});
