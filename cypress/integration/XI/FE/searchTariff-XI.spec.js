describe(' 🇪🇺 💡 🔍 | searchTariff-XI |Search the Tariff - XI |', function() {
  it('XI - Search Commodity by name ', function() {
    cy.visit('/xi/sections');
    // changes made on 11/02/2021
    cy.contains('Look up commodity codes, duty and VAT rates');
    // changes made on 11/02/2021
    cy.contains('Search or browse the Tariff');
    // changes made on 11/02/2021
    cy.contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  it('XI - Search singular and plural', function() {
    const items = ['dvd player', 'dvd players', 'palm oil', 'palm oils'];
    for (let i =0; i<items.length; i++) {
      cy.visit('/xi/sections');
      cy.contains('Search the Northern Ireland Online Tariff');
      cy.searchForCommodity(`${items[i]}`);
      cy.contains('Choose the commodity code below that best matches your goods to see more information');
    }
  });
  it('XI - Search Commodity by code ', function() {
    cy.visit('/xi/sections');
    cy.contains('Look up commodity codes, duty and VAT rates');
    cy.contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('3808941000');
    cy.contains('Commodity information for 3808941000');
  });


  it('XI - Search Commodity by heading code - displays headings page', function() {
    cy.visit('/xi/sections');
    cy.contains('Look up commodity codes, duty and VAT rates');
    cy.searchForCommodity('38089410');
    cy.contains('Choose the commodity code below that best matches your goods to see more information');
  });
  it('XI - Search unknown commodity ', function() {
    cy.visit('/xi/sections');
    cy.contains('Look up commodity codes, duty and VAT rates');
    cy.get('.js-commodity-picker-select').click().type('sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf');
    cy.wait(900);
    cy.get('input[name=\'new_search\']').wait(300).click();
    cy.contains('Search results for ‘sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf’');
    cy.contains('There are no results matching your query.');
    cy.contains('Search or browse the Tariff').click();
    cy.contains('All sections');
  });
  it('XI - Import tab - text', function() {
    cy.visit('/xi/commodities/2009909500#import');
    cy.contains('Measures and restrictions for exporting goods from Northern Ireland');
    cy.contains('Trade between NI and');
  });
  it('XI - Export tab - text', function() {
    cy.visit('/xi/commodities/2009909500#export');
    cy.contains('Measures and restrictions for exporting goods from Northern Ireland');
    cy.contains('Trade between NI and');
  });
});
