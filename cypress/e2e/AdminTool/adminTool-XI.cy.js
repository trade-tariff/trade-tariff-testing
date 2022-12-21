// admin portal e2e regression tests

describe('XI - Admin tool regression tests', {tags: ['adminOnly']}, function() {
  it('xi - verify sections and chapater notes', function() {
    cy.adminLogin('/xi');
    cy.verifySectionChapterNotes();
  });
  it('xi - verify search references', function() {
    cy.adminLogin('/xi/search_references/sections');
    cy.searchReferences();
  });
  it('xi - verify rollbacks', function() {
    cy.adminLogin('/xi/rollbacks');
    cy.rollbacks();
  });
  it('xi - create news item for all services and all collections', function() {
    cy.adminLogin('/xi/news_items');
    cy.createNewsItem();
  });
  it('xi - verify new item on xi tariff service', function() {
    cy.visit('/xi/news');
    cy.verifyNewsItemOnTariffServices('Northern Ireland Online Tariff', 'xi');
  });
  it('xi - verify newly added news item and update the services', function() {
    cy.adminLogin('/xi/news_items');
    cy.verifyAndUpdateNewsItem();
  });
  it('xi - remove news item - newly created', function() {
    cy.adminLogin('/xi/news_items');
    cy.RemoveNewsItem();
  });
  it('xi - verify tariff updates', function() {
    cy.adminLogin('/xi/tariff_updates');
    cy.tariffUpdates('Taric');
  });
  it('xi - reports', function() {
    cy.adminLogin('/xi/reports');
    cy.reports('xi');
  })
});
