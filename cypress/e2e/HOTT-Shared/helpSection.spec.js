/* eslint-disable max-len */
describe('UK 🇬🇧 XI 🇪🇺 | helpSection.spec.js | validate help section |', function() {
  it('Link and page content', function() {
    const pages = ['uk/find_commodity', 'xi/find_commodity', 'duty-calculator/uk/0703109000/import-date', 'duty-calculator/xi/0703109000/import-date'];
    for (let i = 0; i < pages.length; i++) {
      cy.visit(`${pages[i]}`);
      cy.get('.govuk-header__content').contains('Help').click();
      cy.contains('Online Trade Tariff');
      cy.contains('Help on using the tariff');
      cy.contains('If you would like to leave feedback on this service or request additional help with your trade, then use the following links.');
      cy.contains('Leave feedback');
      cy.contains('Getting help from HMRC if you need to find a commodity code');
      cy.contains('Goods that cannot be imported in a single consignment');
      cy.contains('Items packaged as a set');
      cy.contains('Checking what your goods are made of');
      cy.contains('Goods that are difficult to classify');
      // Leave feedback
      cy.contains('Leave feedback or suggestions for improvements to this service.');
      // Getting help from HMRC if you need to find a commodity code
      cy.contains('cannot find the right commodity code for your goods,');
      // Split consingments
      cy.contains('Find out if your goods qualify for import in split consignments');
      // Checking what goods are made of
      cy.contains('directory of consultants for the Royal Society of Chemistry.');
      cy.contains('Goods that are difficult to classify');
      // home breadcrumb
      cy.contains('Home').click();
      cy.contains('Look up commodity codes, import duties, taxes and controls');
    }
  });
  it.only('Validate links', function() {
    cy.visit('/help');
    cy.contains('Leave feedback').click();
    cy.get('.govuk-grid-column-two-thirds > p:nth-of-type(1) > a').should('have.attr', 'href', '/feedback');
    // Getting help from HMRC if you need to find a commodity code
    cy.get('p:nth-of-type(2) > a').should('have.attr', 'href', '/help/help_find_commodity');
    // Goods that cannot be imported in a single consignment
    cy.get('p:nth-of-type(4) > .govuk-link').should('have.attr', 'href', 'https://www.gov.uk/guidance/split-consignments-tariff-classification-and-import-procedures');

    // Items packaged as a set
    // Checking what your goods are made of
    cy.get('p:nth-of-type(9) > .govuk-link').should('have.attr', 'href', 'https://www.rsc.org/membership-and-community/directory-of-consultants/');
  });
  it('Classification guidance', function() {
    cy.visit('/help');
    cy.get('li:nth-of-type(6) > .gem-c-contents-list__link.govuk-link.govuk-link--no-underline').click();
    cy.contains('Some goods are more difficult to classify than others. You can read more on how to classify these goods correctly:');

    cy.contains('aircraft parts');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(1) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-aircraft-parts-and-accessories');

    cy.contains('audio and video equipment for import and export');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(2) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-audio-and-video-equipment');

    cy.contains('ceramics');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(3) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-ceramics');

    cy.contains('classification of goods');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(4) > a').should('have.attr', 'href', 'https://www.gov.uk/government/collections/classification-of-goods');

    cy.contains('computers and software');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(5) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-computers-and-software');

    cy.contains('edible fruits, nuts and peel');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(6) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-edible-fruits-nuts-and-peel');

    cy.contains('edible vegetables, roots and tubers');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(7) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-edible-vegetables-roots-and-tubers');

    cy.contains('electric lamps');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(8) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-electric-lamps');

    cy.contains('footwear');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(9) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-footwear');

    cy.contains('herbal medicines, tonics and supplements');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(10) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-herbal-medicines-supplements-tonics');

    cy.contains('iron and steel');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(11) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-iron-and-steel');

    cy.contains('leather');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(12) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-leather');

    cy.contains('monitors');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(13) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-monitors-for-import-and-export');

    cy.contains('organic chemicals');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(14) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-organic-chemicals');

    cy.contains('pharmaceutical products');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(15) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-pharmaceutical-products');

    cy.contains('placebos and comparators');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(16) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-placebos-and-comparators');

    cy.contains('plastics');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(17) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-plastics');

    cy.contains('rice');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(18) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-rice');

    cy.contains('textiles and textile articles');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(19) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-textile-apparel');

    cy.contains('tobacco and manufactured tobacco substitutes');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(20) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-tobacco');

    cy.contains('toys, games and sports equipment');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(21) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-toys-games-and-sports-equipment');

    cy.contains('vehicles, parts and accessories');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(22) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-vehicles');

    cy.contains('wood');
    cy.get('ul:nth-of-type(2) > li:nth-of-type(23) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/classifying-wood');
  });
  it('Side panel - UK 2022 Integrated Tariff', function() {
    cy.visit('/help');
    cy.contains('On 1 January 2022, the UK introduced its 2022 Integrated Tariff, which incorporates the WCO\'s changes to the Harmonised System Nomenclature.');
    cy.contains('View the correlation of commodity codes, at 8-digit level, from the 2021 Tariff to that of 2022.').click();
    cy.contains('2022 UK goods classification');
  });
  it('Side panel - CDS guidance, code and procedures', function() {
    cy.visit('/help');
    cy.contains('CDS guidance, codes and procedures');
    cy.contains('UK Trade Tariff: volume 3 for CDS');
    cy.get('nav:nth-of-type(2) > .gem-c-related-navigation__link-list > li:nth-of-type(1) > a').should('have.attr', 'href', 'https://www.gov.uk/government/collections/uk-trade-tariff-volume-3-for-cds--2#imports:-guidance-on-completing-an-import-declaration-for-the-customs-declaration-service');
    // GB
    cy.contains('Customs Declaration Completion Requirements for Great Britain');
    cy.get('nav:nth-of-type(2) > .gem-c-related-navigation__link-list > li:nth-of-type(2) > a').should('have.attr', 'href', 'https://www.gov.uk/government/publications/customs-declaration-completion-requirements-for-great-britain');
    // XI
    cy.contains('Customs Declaration Completion Requirements for The Northern Ireland Protocol');
    cy.get('nav:nth-of-type(2) > .gem-c-related-navigation__link-list > li:nth-of-type(3) > a').should('have.attr', 'href', 'https://www.gov.uk/government/publications/customs-declaration-completion-requirements-for-the-northern-ireland-protocol');
  });
  it('Side panel - CHIEF guidance, code and procedures', function() {
    cy.visit('/help');
    cy.contains('CHIEF guidance, codes and procedures');
    cy.contains('UK Trade Tariff: volume 3 for CHIEF');
    cy.get('nav:nth-of-type(3) > .gem-c-related-navigation__link-list > li:nth-of-type(1) > a').should('have.attr', 'href', 'https://www.gov.uk/government/collections/uk-trade-tariff-volume-3-for-chief');


    cy.contains('Customs Declaration Completion Requirements for Great Britain');
    cy.get('nav:nth-of-type(3) > .gem-c-related-navigation__link-list > li:nth-of-type(2) > a').should('have.attr', 'href', 'https://www.gov.uk/government/publications/customs-declaration-completion-requirements-for-great-britain');
  });
});
