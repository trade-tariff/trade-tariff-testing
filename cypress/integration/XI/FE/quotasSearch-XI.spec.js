describe('🇪🇺 💡 ⚙️ quotas Search -XI services)', {tags: ['config', 'xbrowser-tag']}, function() {
  it('⚙️ 🚫 API - XI quota search page 404', function() {
    cy.request({method: 'GET', url: '/xi/api/v2/quota_search', failOnStatusCode: false}).as('comments');
    cy.get('@comments')
        .then((response) => {
          expect(response.status).to.eq(404);
        });
  });
  it('💡 🚫 Quotas search should not exist on tools page ', function() {
    cy.visit('/xi/tools');
    !cy.get('.govuk-list')
        .contains('Quotas').should('not.exist');
  });
});
