describe('Admin tool smoke tests', { tags: ['smokeTest'] }, function() {
  it('verify sections and chapter notes', function() {
    cy.loginOrRestoreAdminSession();
    cy.verifySectionChapterNotes('uk');
  });
});
