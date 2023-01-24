/* eslint-disable max-len */

describe('🇬🇧 💡 | suppUnits.spec.js | Supplementary Units on UK and XI services |', function() {
  const country = ['xi', ''];
  for (let i = 0; i < country.length; i++) {
    it(`${country[i]} - Commodity page - without Supp units`, function() {
      cy.visit(`${country[i]}/commodities/6406109010`);
      cy.get('.govuk-summary-list').contains('Commodity');
      cy.get('.govuk-summary-list').contains('Classification');
      cy.contains('Hand-made');
      cy.get('.govuk-summary-list').contains('Supplementary unit');
      cy.get('.govuk-summary-list').contains('No supplementary unit required.');
      cy.get('.govuk-summary-list').contains('Date of trade');
      cy.get('.govuk-summary-list').contains('What are supplementary units?').click();
      cy.contains('Supplementary units are used when an additional measurement unit is needed on customs declarations. For example: the quantity of the products as well as the weight in kilograms.');
    });
    it(`${country[i]} - Commodity page - with Supp units`, function() {
      cy.visit(`${country[i]}/commodities/6401929000`);
      cy.get('.govuk-summary-list').contains('Commodity');
      cy.get('.govuk-summary-list').contains('Classification');
      cy.contains('With uppers of plastics');
      cy.get('.govuk-summary-list').contains('Supplementary unit');
      cy.get('.govuk-summary-list').contains('Number of pairs (pa)');
      cy.get('.govuk-summary-list').contains('Date of trade');
      cy.get('.govuk-summary-list').contains('What are supplementary units?').click();
      cy.contains('Supplementary units are used when an additional measurement unit is needed on customs declarations. For example: the quantity of the products as well as the weight in kilograms.');
    });
    it(`${country[i]} - Commodity page - with import Supp units for certain countries`, function() {
      cy.visit(`${country[i]}/commodities/1702908000`);
      cy.get('.govuk-summary-list').contains('Commodity');
      cy.get('.govuk-summary-list').contains('Classification');
      cy.contains('Inulin syrup');
      cy.get('.govuk-summary-list').contains('Supplementary unit');
      cy.get('.govuk-summary-list').contains('Kilogram (kg/raw sugar)');
      cy.get('.govuk-summary-list').contains('Date of trade');
      cy.get('.govuk-summary-list').contains('What are supplementary units?').click();
      cy.contains('Supplementary units are used when an additional measurement unit is needed on customs declarations. For example: the quantity of the products as well as the weight in kilograms.');
      cy.searchForCountry('Peru').type('{enter}');
      cy.get('.govuk-summary-list').contains('Supplementary unit (import)');
      cy.get('.govuk-summary-list').contains('Kilogram (kg/raw sugar)');
    });
    it(`${country[i]} - Commodity page - with import only Supp units`, function() {
      cy.visit(`${country[i]}/commodities/7410210055`);
      cy.get('.govuk-summary-list').contains('Commodity');
      cy.get('.govuk-summary-list').contains('Classification');
      cy.contains('with a comparative tracking index (CTI) of 600 or more');
      cy.get('.govuk-summary-list').contains('Supplementary unit (import)');
      cy.get('.govuk-summary-list').contains('Square metre (m²)');
      cy.get('.govuk-summary-list').contains('Date of trade');
      cy.get('.govuk-summary-list').contains('What are supplementary units?').click();
      cy.contains('Supplementary units are used when an additional measurement unit is needed on customs declarations. For example: the quantity of the products as well as the weight in kilograms.');
      cy.searchForCountry('Peru').type('{enter}');
      cy.get('.govuk-summary-list').contains('Supplementary unit (import)');
      cy.get('.govuk-summary-list').contains('Square metre (m²)');
    });
  }
});