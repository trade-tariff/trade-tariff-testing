/* eslint-disable max-len */
describe(' 🇬🇧 💡 🔍  | searchTariff-UK | Search the Tariff - UK |', function() {
  it('UK - Search Commodity by name ', function() {
    cy.visit('/sections');
    // changed on 11/02/2021
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    // changed on 11/02/2021
    cy.contains('Browse');
    // changed on 11/02/2021
    cy.contains('Search the UK Integrated Online Tariff');
    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  it('UK - Search singular and plural', function() {
    const items = ['dvd player', 'dvd players', 'palm oil', 'palm oils'];
    for (let i =0; i<items.length; i++) {
      cy.visit('/sections');
      cy.contains('Search the UK Integrated Online Tariff');
      cy.searchForCommodity(`${items[i]}`);
      cy.contains('Choose the commodity code below that best matches your goods to see more information');
    }
  });

  it('UK - Search Commodity by code ', function() {
    cy.visit('/sections');
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.contains('Search the UK Integrated Online Tariff');
    cy.searchForCommodity('3808941000');
    cy.checkCommPage('3808941000');
  });

  it('UK - Search Commodity by heading code - displays headings page', function() {
    cy.visit('/sections');
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.searchForCommodity('38089410');
    cy.contains('Choose the commodity code below that best matches your goods to see more information');
  });
  it('UK - Search unknown commodity ', function() {
    cy.visit('/sections');
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.get('.govuk-label')
        .contains('Search the UK Integrated Online Tariff');
    cy.get('.js-commodity-picker-select').click().type('sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf');
    cy.wait(900);
    cy.get('li#q__option--0').click();
    cy.get('input[name=\'commit\']').click();
    cy.contains('Search results for ‘sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf’');
    cy.contains('There are no results matching your query.');
    cy.contains('Browse').click();
    cy.contains('Browse the tariff');
  });
  it('UK - Import tab - text', function() {
    cy.visit('commodities/2009909500#import');
    cy.contains('Measures and restrictions for importing into the UK');
    cy.contains('Trade between the UK and');
  });
  it('UK - Export tab - text', function() {
    cy.visit('commodities/2009909500#export');
    cy.contains('Measures and restrictions for exporting from the UK');
    cy.contains('Trade between the UK and');
  });
  it.only('UK - Search Tariff on other pages', function() {
    cy.visit({url: '404', failOnStatusCode: false});
    cy.searchForCommodity2('3808941000');
    cy.contains(/Commodity .*3808941000/i);

    cy.visit({url: '500', failOnStatusCode: false});
    cy.searchForCommodity2('3808941000');
    cy.contains(/Commodity .*3808941000/i);

    const pages = ['browse', 'sections/6', 'chapters/28', 'headings/2802', 'commodities/2805120010', 'feedback', 'search?q=fdsfsdfdsffdsfsd&input-autocomplete=fdsfsdfdsffdsfsd','a-z-index/a'];
    for (let i=0; i<pages.length; i++) {
      cy.visit(`/${pages[i]}`);
      cy.searchForCommodity2('3808941000');
      cy.contains(/Commodity .*3808941000/i);
    }
    const otherpages = ['sections', 'find_commodity'];
    for (let j=0; j<otherpages.length; j++) {
      cy.visit(`/${otherpages[j]}`);
      cy.searchForCommodity('3808941000');
      cy.contains(/Commodity .*3808941000/i);
    }
  });
});
