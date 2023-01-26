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
  it('verify search references heading', function() {
    cy.adminLogin('/search_references/sections');
    cy.searchReferencesHeading('');
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
    cy.removeNewsItem();
  });
  it('search quota order number', function() {
    cy.adminLogin('/quota_search');
    cy.searchQuotas('058011');
  });
  it('quota - definations and balances - exhaustion event', function() {
    cy.adminLogin('/quotas/search?quota_search%5Border_number%5D=050071');
    cy.quotaDefinationsBalances('050071', 'Exhaustion event', '20846');
  });
  it('quota - definations and balances - reopening event', function() {
    cy.adminLogin('/quotas/search?quota_search%5Border_number%5D=050086');
    cy.quotaDefinationsBalances('050086', 'Reopening event', '20852');
  });
  it('quota - definations and balances - unblocking event', function() {
    cy.adminLogin('/quotas/search?quota_search%5Border_number%5D=090007');
    cy.quotaDefinationsBalances('090007', 'Unblocking event', '1892');
  });
  it('quota - definations and balances - unsuspension event', function() {
    cy.adminLogin('/quotas/search?quota_search%5Border_number%5D=090204');
    cy.quotaDefinationsBalances('090204', 'Unsuspension event', '1691');
  });
  it('verify tariff updates', function() {
    cy.adminLogin('/tariff_updates');
    cy.tariffUpdates('CDS');
  });
  it('reports', function() {
    cy.adminLogin('/reports');
    cy.reports('');
  });
});
