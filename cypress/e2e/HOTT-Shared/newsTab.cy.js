/* eslint-disable max-len */
describe('| 📰 newsTab.spec.js | news updates page on UK and XI services', function() {
  // Updates from 8th December 2021
  const countries = ['', 'xi'];
  const pagetitles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];

  for (let i=0; i<countries.length; i++) {
    it(`${countries[i]} - News page`, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('News').click();
      cy.contains('Trade tariff news bulletin');
      cy.get('head link[type="application/atom+xml"]').should('have.attr', 'title', 'Trade tariff news bulletin');
    });
    it(`${countries[i]} - Amend display of filters list on the listing page`, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('News').click();
      cy.get('body > div.tariff.service.govuk-width-container > nav').contains('News bulletin');
      cy.get('#news-filters').contains('Filter by year');
      cy.get('#news-year-filter').contains('All years');
      cy.get('#news-year-filter').contains('2022');
      cy.get('#news-filters').contains('Filter by collection');
      cy.get('#news-filters').contains('All collections');
      cy.get('#news-filters').contains('Tariff stop press');
      cy.get('#news-filters').contains('Trade news');
      cy.get('#news-filters').contains('Service updates');
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items').contains('All collections');
    });
    it(`${countries[i]} - Filter by year`, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('News').click();
      cy.get('body > div.tariff.service.govuk-width-container > nav').contains('News bulletin');
      cy.get('#news-filters').contains('Filter by year');
      cy.get('#news-year-filter').contains('All years');
      cy.get('#news-year-filter').contains('2022').click();
      cy.url().should('include', '/years/2022');
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items > article:nth-child(2)').contains('2022');
    });
    it(`${countries[i]} - Filter by collection`, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('News').click();
      cy.get('body > div.tariff.service.govuk-width-container > nav').contains('News bulletin');
      cy.get('#news-filters').contains('Filter by collection');
      cy.get('#news-filters').contains('Tariff stop press').click();
      cy.url().should('include', '/news/collections/tariff_stop_press');
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items').contains('Tariff stop press');
    });
    it(`${countries[i]} - Verify news page pagination`, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('News').click();
      cy.get('body > div.tariff.service.govuk-width-container > nav').contains('News bulletin');
      cy.get('#news-filters').contains('Filter by year');
      cy.get('#news-filters').contains('Filter by collection');
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items').contains('All collections');
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items > nav').contains('2').click();
      cy.url().should('include', '/news?page=2');
    });
    it(`${countries[i]} - Click first link in the collection list`, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('News').click();
      cy.get('body > div.tariff.service.govuk-width-container > nav').contains('News bulletin');
      cy.get('#news-filters').contains('Filter by year');
      cy.get('#news-filters').contains('Filter by collection');
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items').contains('All collections');
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items > article:nth-child(2) > h2 > a').click();
      cy.contains(`${pagetitles[i]}`);
      cy.contains('HM Revenue & Customs');
      cy.should('have.attr', 'href', 'https://www.gov.uk/government/organisations/hm-revenue-customs');
      cy.contains('Print this page');
      cy.contains('Back to top');
      cy.url().should('include', '/news/stories/');
      cy.get('head link[type="application/atom+xml"]').should('have.attr', 'title', 'Trade tariff news bulletin');
    });
    it(`${countries[i]} - Filter Tariff stop press and click first link in the Tariff stop press list`, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('News').click();
      cy.get('body > div.tariff.service.govuk-width-container > nav').contains('News bulletin');
      cy.get('#news-filters').contains('Filter by year');
      cy.get('#news-filters').contains('Filter by collection');
      cy.get('#news-filters').contains('Tariff stop press').click();
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items').contains('Tariff stop press');
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items > article:nth-child(2) > h2 > a').click();
      cy.contains(`${pagetitles[i]}`);
      cy.contains('HM Revenue & Customs');
      cy.should('have.attr', 'href', 'https://www.gov.uk/government/organisations/hm-revenue-customs');
      cy.contains('Print this page');
      cy.contains('Back to top');
      cy.url().should('include', '/news/stories/');
    });
    it(`${countries[i]} - Filter Trade news and click first link in the Trade news list`, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('News').click();
      cy.get('body > div.tariff.service.govuk-width-container > nav').contains('News bulletin');
      cy.get('#news-filters').contains('Filter by year');
      cy.get('#news-filters').contains('Filter by collection');
      cy.get('#news-filters').contains('Trade news').click();
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items').contains('Trade news');
      cy.get('#content > div.govuk-grid-row > div.govuk-grid-column-three-quarters.news-items > article:nth-child(2) > h2 > a').click();
      cy.contains(`${pagetitles[i]}`);
      cy.contains('HM Revenue & Customs');
      cy.should('have.attr', 'href', 'https://www.gov.uk/government/organisations/hm-revenue-customs');
      cy.contains('Print this page');
      cy.contains('Back to top');
      cy.url().should('include', '/news/stories/');
    });
    it(`${countries[i]} - Verify querystring parameter does not clash with time machine`, function() {
      cy.visit(`${countries[i]}/commodities/2204109100?day=27&month=3&year=2022`);
      cy.url().should('include', '/commodities/2204109100?day=27&month=3&year=2022');
      cy.contains(`${pagetitles[i]}`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('News').click();
      cy.contains('Trade tariff news bulletin');
      cy.url().should('include', '/news?day=27&month=3&year=2022');
      cy.get('.news-item').contains('2023');
      cy.get('#news-year-filter').contains('2021').click();
      cy.url().should('include', '/news/years/2021?day=27&month=3&year=2022');
      cy.get('#news-collection-filter').contains('Tariff stop press').click();
      cy.url().should('include', 'news/collections/tariff_stop_press/2021?day=27&month=3&year=2022');
    });
  }
});
