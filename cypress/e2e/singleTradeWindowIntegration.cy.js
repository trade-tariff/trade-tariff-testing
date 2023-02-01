// TODO: All of these specs are effectively disabled until STW and DIT get there issues resolved.
describe('STW integration', function() {
  context('when the commodity has conditionally prohibitive measures', function() {
    it('shows the correct STW message', function() {
      // given a commodity with a conditionally prohibitive measure
      cy.visit('/commodities/8903221000');
      // when no country is selected (the default)
      // then no country is selected message shows
      cy.contains('To check how to import commodity 8903221000');
      // when we pick a country where conditionally prohibitive measures apply
      cy.pickTradingPartner('ID');
      // // then we show the STW link
      cy.contains('The import of commodity 8903221000 from Indonesia may be prohibited');
    });
  });

  context('when the commodity has prohibitive measures', function() {
    it('shows the correct STW message', function() {
      // given a commodity with a conditionally prohibitive measure
      cy.visit('/commodities/4402200010');
      // when no country is selected (the default)
      // then no country is selected message shows
      cy.contains('To check how to import commodity 4402200010');
      // when we pick a country where conditionally prohibitive measures apply
      cy.pickTradingPartner('ID');
      // then we show the STW link
      cy.contains('The import of commodity 4402200010 from Indonesia is prohibited.');
    });
  });

  context('when the commodity has no prohibitive or conditionally prohibitive measures', function() {
    it('shows STW link', function() {
      // given a commodity with a conditionally prohibitive measure
      cy.visit('/commodities/0702000007');
      // when no country is selected (the default)
      // then no country is selected message shows
      cy.contains('To check how to import commodity 0702000007');
      // when we pick a country where conditionally prohibitive measures apply
      cy.pickTradingPartner('AN');
      // then we show the STW link

      cy.get('.tariff-inset-information > a').contains('Check how to import commodity 0702000007 from Andorra (opens in a new tab).');
    });
  });
});
