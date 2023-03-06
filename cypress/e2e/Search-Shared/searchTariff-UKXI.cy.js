describe('searchTariff-UKXI | Search the Tariff - UK and XI |', {tags: ['config', 'xbrowser-tag']}, function() {
  const countries = ['uk', 'xi'];

  for (let j=0; j<countries.length; j++) {
    it(`${countries[j]} - Search Commodity by name `, function() {
      cy.visit(`${countries[j]}/find_commodity`);
      cy.searchForCommodity('gherkins');
      cy.contains('Gherkins').click();
      cy.url().should('include', '/commodities/0707009000');
    });

    it(`${countries[j]} - Search singular and plural`, function() {
      const items = ['dvd player', 'dvd players', 'palm oil', 'palm oils'];
      for (let i =0; i<items.length; i++) {
        cy.visit(`${countries[j]}/sections`);

        cy.searchForCommodity(`${items[i]}`);
        cy.contains('Choose the commodity code that best matches your goods');
      }
    });

    it(`${countries[j]} - Search Commodity by code `, function() {
      cy.visit(`${countries[j]}/sections`);
      cy.searchForCommodity('3808941000');
      cy.checkCommPage('3808941000');
    });

    it(`${countries[j]} - Search Commodity by sub heading code - displays comoodity page`, function() {
      cy.visit(`${countries[j]}/sections`);
      cy.searchForCommodity('38089410');
      cy.contains('Commodity 3808941000');
      cy.searchForCommodity2('2933998000');
      cy.contains('Subheading 29339980 - Other');
    });

    it(`${countries[j]} - Search unknown commodity `, function() {
      cy.visit(`${countries[j]}/sections`);
      cy.searchForCommodity('sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf');
      cy.contains('Search results for ‘sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf’');
      cy.contains('There are no results matching your query.');
      cy.contains('Browse').click();
      cy.contains('Browse the tariff');
    });

    it(`${countries[j]} - Search Tariff on other pages`, function() {
      const pages = [
        'browse',
        'sections/6',
        'chapters/28',
        'headings/2802',
        'commodities/2805120010',
        'search?q=fdsfsdfdsffdsfsd&input-autocomplete=fdsfsdfdsffdsfsd',
        'a-z-index/a',
      ];
      for (let i=0; i<pages.length; i++) {
        cy.visit(`${countries[j]}/${pages[i]}`);
        cy.searchForCommodity2('3808941000');
        cy.contains(/Commodity .*3808941000/i);
      }
      const otherpages = ['sections', 'find_commodity'];
      for (let j=0; j<otherpages.length; j++) {
        cy.visit(`${countries[j]}/${otherpages[j]}`);
        cy.searchForCommodity('3808941000');
        cy.contains(/Commodity .*3808941000/i);
      }
    });

    it(`${countries[j]} - Commodity endpoint redirects to subheading`, function() {
      cy.visit(`${countries[j]}/commodities/0713900000`);
      cy.contains('Subheading 071390 - Other');
    });
  }
});
