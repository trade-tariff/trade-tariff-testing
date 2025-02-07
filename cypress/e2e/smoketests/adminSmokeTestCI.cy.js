describe('Admin tool smoke tests', {tags: ['adminOnly']}, function() {
  it('verify sections and chapter notes', function() {
    cy.loginOrRestoreAdminSession();
    cy.verifySectionChapterNotes('uk');
  });
});
