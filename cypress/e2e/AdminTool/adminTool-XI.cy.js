// admin portal e2e regression tests

describe('XI - Admin tool regression tests', {tags: ['adminOnly']}, function() {
  it('verify sections and chapter notes', function() {
    cy.adminLogin('/xi');
    cy.verifySectionChapterNotes();
  });
  it('verify search references', function() {
    cy.adminLogin('/xi/search_references/sections');
    cy.searchReferences();
  });
  it('verify search references heading', function() {
    cy.adminLogin('/xi/search_references/sections');
    cy.searchReferencesHeading('xi');
  });
  it('verify rollbacks', function() {
    cy.adminLogin('/xi/rollbacks');
    cy.rollbacks();
  });
  it('create news item for all services and all collections', function() {
    cy.adminLogin('/xi/news_items');
    cy.createNewsItem();
  });
  it('verify new item on xi tariff service', function() {
    cy.visit('/xi/news');
    cy.verifyNewsItemOnTariffServices('Northern Ireland Online Tariff', 'xi');
  });
  it('verify newly added news item and update the services', function() {
    cy.adminLogin('/xi/news_items');
    cy.verifyAndUpdateNewsItem();
  });
  it('remove news item - newly created', function() {
    cy.adminLogin('/xi/news_items');
    cy.removeNewsItem();
  });
  it('verify tariff updates', function() {
    cy.adminLogin('/xi/tariff_updates');
    cy.tariffUpdates('Taric');
  });
  it('reports', function() {
    cy.adminLogin('/xi/reports');
    cy.reports('xi');
  });
});
