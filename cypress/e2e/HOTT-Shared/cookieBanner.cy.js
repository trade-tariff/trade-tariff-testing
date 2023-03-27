describe('cookie banner', function() {
  it('Accept Cookies', function() {
    cy.visit('/find_commodity');
    cy.contains('Accept additional cookies').click();
    cy.contains('Hide this message').click();
    cy.fetchCookie('cookies_policy')
        .then((decodedCookie) => {
          expect(decodedCookie).to.deep.equal({
            'usage': true,
            'remember_settings': true,
          });
        });
    cy.fetchCookie('cookies_preferences_set')
        .then((decodedCookie) => {
          expect(decodedCookie).to.deep.equal({
            'value': true,
          });
        });
  });

  it('Reject Cookies', function() {
    cy.visit('/find_commodity');
    cy.contains('Reject additional cookies').click();
    cy.contains('Hide this message').click();
    cy.fetchCookie('cookies_policy')
        .then((decodedCookie) => {
          expect(decodedCookie).to.deep.equal({
            'usage': false,
            'remember_settings': false,
          });
        });
    cy.fetchCookie('cookies_preferences_set')
        .then((decodedCookie) => {
          expect(decodedCookie).to.deep.equal({
            'value': true,
          });
        });
  });
});
