// uk - admin portal e2e regression tests

describe('UK - Admin tool regression tests', {tags: ['adminOnly']}, function() {
  it('uk - verify sections and chapater notes', function() {
    cy.adminLogin('/');
    cy.verifySectionChapterNotes();
  });
  it('uk - verify search references', function() {
    cy.adminLogin('/search_references/sections');
    cy.searchReferences();
  });
  it('uk - verify rollbacks', function() {
    cy.adminLogin('/rollbacks');
    cy.rollbacks();
  });
  it('uk - create news item for all services and all collections', function() {
    cy.adminLogin('/news_items');
    cy.createNewsItem();
  });
  it('uk - verify new item on uk tariff service', function() {
    cy.visit('/news');
    cy.verifyNewsItemOnTariffServices('UK Integrated Online Tariff', '');
  });
  it('uk - verify newly added news item and update the services', function() {
    cy.adminLogin('/news_items');
    cy.verifyAndUpdateNewsItem();
  });
  it('uk - remove news item - newly created', function() {
    cy.adminLogin('/news_items');
    cy.RemoveNewsItem();
  });
  it('uk - search quota order number', function() {
    cy.adminLogin('/quotas/new');
    cy.SearchQuotas('058011');
  });
  it('uk - verify tariff updates', function() {
    cy.adminLogin('/tariff_updates');
    cy.tariffUpdates('CDS');
  });
  it('uk - reports', function() {
    cy.adminLogin('/reports');
    cy.reports('');
  })
});
