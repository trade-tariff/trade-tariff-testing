/* eslint-disable max-len */
describe(' 🇪🇺 💡 🔍 | searchTariff-XI |Search the Tariff - XI |', function() {
  it('XI - Search Commodity by name ', function() {
    cy.visit('/xi/sections');
    // changes made on 11/02/2021
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    // changes made on 11/02/2021
    cy.contains('Browse');
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
       cy.contains('Choose the commodity code that best matches your goods to see more information. If your item is not listed by name, it may be shown under what it\'s used for, what it\'s made from or \'Other\'.');
    }
  });
  it('XI - Search Commodity by code ', function() {
    cy.visit('/xi/sections');
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('3808941000');
    cy.checkCommPage('3808941000');
  });


  it('XI - Search Commodity by heading code - displays headings page', function() {
    cy.visit('/xi/sections');
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.searchForCommodity('38089410');
    cy.contains('Choose the commodity code that best matches your goods to see more information. If your item is not listed by name, it may be shown under what it\'s used for, what it\'s made from or \'Other\'.');
  });
  it('XI - Search unknown commodity ', function() {
    cy.visit('/xi/sections');
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.searchForCommodity('sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf');
    cy.contains('Search results for ‘sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf’');
    cy.contains('There are no results matching your query.');
    cy.contains('Browse').click();
    cy.contains('Browse the tariff');
  });
  it('XI - Import tab - text', function() {
    cy.visit('/xi/commodities/2009909500#import');
    cy.contains('Importing into Northern Ireland');
  });
  it('XI - Export tab - text', function() {
    cy.visit('/xi/commodities/2009909500#export');
    cy.contains('Exporting from Northern Ireland');
  });
  it('XI - Search Tariff on other pages', function() {
    cy.visit({url: 'xi/404', failOnStatusCode: false});
    cy.searchForCommodity2('3808941000');
    cy.contains(/Commodity .*3808941000/i);

    cy.visit({url: 'xi/500', failOnStatusCode: false});
    cy.searchForCommodity2('3808941000');
    cy.contains(/Commodity .*3808941000/i);

    const pages = ['browse', 'sections/6', 'chapters/28', 'headings/2802', 'commodities/2805120010', 'feedback', 'search?q=fdsfsdfdsffdsfsd&input-autocomplete=fdsfsdfdsffdsfsd', 'a-z-index/a'];
    for (let i=0; i<pages.length; i++) {
      cy.visit(`/xi/${pages[i]}`);
      cy.searchForCommodity2('3808941000');
      cy.contains(/Commodity .*3808941000/i);
    }
    const otherpages = ['sections', 'find_commodity'];
    for (let j=0; j<otherpages.length; j++) {
      cy.visit(`/xi/${otherpages[j]}`);
      cy.searchForCommodity('3808941000');
      cy.contains(/Commodity .*3808941000/i);
    }
  });
  it.skip('XI - Search using subheadings (6 digits) or CN code (8 digits) - intermediary page', function() {
    const searchSynonyms = ['face masks', 'leg of lamb', 'jute bags', 'curry leaves', 'dried red chillies', 'himalayan salt', 'chilli pepper'];
    const searchResults = ['Subheading 63079093 - Protective face masks', 'Subheading 02042250 - Legs', 'Subheading 531010 - Unbleached', 'Subheading 09109991 - Other', 'Subheading 090421 - Dried, neither crushed nor ground', 'Subheading 25010091 - Other', 'Subheading 090411 - Neither crushed nor ground'];
    cy.visit('xi/browse');
    for (let i=0; i<searchSynonyms.length; i++) {
      cy.searchForCommodity2(`${searchSynonyms[i]}`);
      cy.contains(`${searchResults[i]}`);
    }
  });
});
