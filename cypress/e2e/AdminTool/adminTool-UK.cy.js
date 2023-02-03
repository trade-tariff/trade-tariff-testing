describe('UK - Admin tool regression tests', {tags: ['adminOnly']}, function() {
  beforeEach(() => {
    cy.loginOrRestoreAdminSession();
  });

  it('verify sections and chapter notes', function() {
    cy.verifySectionChapterNotes('uk');
  });

  it('verify section search references', function() {
    cy.verifySectionSearchReferences('uk');
  });

  it('verify heading search references', function() {
    cy.verifySearchReferencesHeading('uk');
  });

  it('verify rollbacks', function() {
    cy.verifyRollbacks('uk');
  });

  it('CRUD a news item', function() {
    cy.createNewsItem('uk');
    cy.verifyNewsItemOnTariffServices('UK Integrated Online Tariff');
    cy.verifyAndUpdateNewsItem('uk');
    cy.removeNewsItem('uk');
  });

  it('verify tariff updates', function() {
    cy.tariffUpdates('uk');
  });

  it('reports', function() {
    cy.reports('uk');
  });

  it('search quota order number', function() {
    cy.searchQuotas('058011');
  });

  it('quota - definitions and balances - exhaustion event', function() {
    cy.quotaDefinationsBalances('050071', 'Exhaustion event', '20846');
  });

  it('quota - definitions and balances - reopening event', function() {
    cy.quotaDefinationsBalances('050086', 'Reopening event', '20852');
  });

  it('quota - definitions and balances - unblocking event', function() {
    cy.quotaDefinationsBalances('090007', 'Unblocking event', '1892');
  });

  it('quota - definitions and balances - unsuspension event', function() {
    cy.quotaDefinationsBalances('090204', 'Unsuspension event', '1691');
  });
});
