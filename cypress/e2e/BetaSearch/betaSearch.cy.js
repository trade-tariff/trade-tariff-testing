/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
describe(' 🇬🇧 💡 🔍  | searchTariff-UKXI | Search the Tariff - UK and XI |', {tags: ['devOnly']}, function() {
  // Search strategic - implement guides on the UI - HOTT-2002
  const countries = ['', 'xi'];
  for (let j=0; j<countries.length; j++) {
    const search_items = ['potatoes (fresh)', 'abs'];
    for (let j=0; j < search_items.length; j++) {
      it(`${countries[j]} - Beta Search - Search using name of the goods - ${search_items[j]} - implement guides on the UI`, function() {
        cy.visit(`${countries[j]}/find_commodity`);
        cy.contains('Look up commodity codes, import duties, taxes and controls'); ;
        cy.contains('Search for a commodity');
        cy.searchForCommodity(`${search_items[j]}`);
        cy.get('.image-guide').should('exist');
        cy.get('#search-filter-navigation').contains('Classification guide');
        if (`${search_items[j]}` === 'potatoes (fresh)') {
          cy.get('#search-filter-navigation').contains('Edible fruits, nuts and peel');
          cy.get('#search-filter-navigation').contains('Get help to classify edible vegetables, roots, tubers, herbs, spices, fruit, nuts and peel for import and export.');
          cy.get('#search-filter-navigation').contains('View classification guide for Edible fruits, nuts and peel (opens in new tab)');
          cy.get('#search-filter-navigation div div p a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-edible-fruits-nuts-and-peel');
        } else {
          cy.get('#search-filter-navigation').contains('Vehicles, parts and accessories');
          cy.get('#search-filter-navigation').contains('Get help to classify various types of vehicles such as mobility scooters, dumpers and utility vehicles, all-terrain vehicles and E-Bikes for import and export.');
          cy.get('#search-filter-navigation').contains('View classification guide for Vehicles, parts and accessories (opens in new tab)');
          cy.get('#search-filter-navigation div div p a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-vehicles');
        }
      });
    }
  }
});
