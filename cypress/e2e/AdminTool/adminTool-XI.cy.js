describe('XI - Admin tool regression tests', {tags: ['adminOnly']}, function() {
  beforeEach(() => {
    cy.loginOrRestoreAdminSession();
  });

  it('verify sections and chapter notes', function() {
    cy.verifySectionChapterNotes('xi');
  });

  it('verify search references', function() {
    cy.verifySectionSearchReferences('xi');
  });

  it('verify search references heading', function() {
    cy.verifySearchReferencesHeading('xi');
  });

  it('verify rollbacks', function() {
    cy.verifyRollbacks('xi');
  });

  it('CRUD a news item', function() {
    cy.createNewsItem('xi');
    cy.verifyNewsItemOnTariffServices();
    cy.verifyAndUpdateNewsItem('xi');
    cy.removeNewsItem('xi');
  });

  it('verify tariff updates', function() {
    cy.tariffUpdates('xi');
  });

  it('reports', function() {
    cy.reports('xi');
  });
});
