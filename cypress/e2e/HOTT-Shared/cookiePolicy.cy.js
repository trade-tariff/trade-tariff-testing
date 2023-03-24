describe('cookie policy', function() {
  it('allows the user to choose their own cookie policy', function() {
    cy.visit('/cookies/policy');
    cy.get('#cookies_policy_remember_settings_true').check();
    cy.get('#cookies_policy_usage_false').check();
    cy.contains('Save Changes').click();

    cy.fetchCookie('cookies_policy')
        .then((decodedCookie) => {
          expect(decodedCookie).to.deep.equal({
            'usage': false,
            'remember_settings': true,
          });
        });

    cy.get('.govuk-notification-banner__header').contains('Success');
  });
});
