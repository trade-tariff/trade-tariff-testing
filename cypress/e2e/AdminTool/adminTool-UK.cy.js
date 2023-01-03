// admin portal e2e regression tests

describe('UK - Admin tool regression tests', {tags: ['adminOnly']}, function() {
  it('verify sections and chapter notes', function() {
    cy.adminLogin('/');
    cy.verifySectionChapterNotes();
  });
  it('verify search references', function() {
    cy.adminLogin('/search_references/sections');
    cy.searchReferences();
  });
  it('verify rollbacks', function() {
    cy.adminLogin('/rollbacks');
    cy.rollbacks();
  });
  it('create news item for all services and all collections', function() {
    cy.adminLogin('/news_items');
    cy.createNewsItem();
  });
  it('verify new item on uk tariff service', function() {
    cy.visit('/news');
    cy.verifyNewsItemOnTariffServices('UK Integrated Online Tariff', '');
  });
  it('verify newly added news item and update the services', function() {
    cy.adminLogin('/news_items');
    cy.verifyAndUpdateNewsItem();
  });
  it('remove news item - newly created', function() {
    cy.adminLogin('/news_items');
    cy.RemoveNewsItem();
  });
  it('search quota order number', function() {
    cy.adminLogin('/quotas/new');
    cy.SearchQuotas('058011');
  });
  it('verify tariff updates', function() {
    cy.adminLogin('/tariff_updates');
    cy.tariffUpdates('CDS');
  });
  it('reports', function() {
    cy.adminLogin('/reports');
    cy.reports('');
  })
});
