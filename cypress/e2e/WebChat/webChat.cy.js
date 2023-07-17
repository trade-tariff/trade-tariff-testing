describe('Verify Webchat', function() {
  context('when on the UK version of the site', function() {
    it('verify webchat link on help page', function() {
      cy.visit('/help');
      cy.get('a[href^="https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff"]');
    });

    it('webchat link shows for no results search', function() {
      cy.visit('/search?q=xxxx&resource_id=&input-autocomplete=xxxx');
      cy.get('a[href^="https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff"]');
    });

    it('webchat link is displayed on search results page', function() {
      cy.visit('/search?q=potatoes&input-autocomplete=potatoes');
      cy.get('a[href^="https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff"]');
    });

    it('webchat popup shows on commodity pages', function() {
      cy.visit('/commodities/2005800010');
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(25000);
      cy.get('#help_popup a').should('have.attr', 'href', 'https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff');
    });
  });

  context('when on the XI version of the site', function() {
    it('verify webchat link on help page', function() {
      cy.visit('/xi/help');
      cy.get('a[href^="https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff"]');
    });

    it('webchat link shows for no results search', function() {
      cy.visit('/xi/search?q=xxxx&resource_id=&input-autocomplete=xxxx');
      cy.get('a[href^="https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff"]');
    });

    it('webchat link is displayed on search results page', function() {
      cy.visit('/xi/search?q=potatoes&input-autocomplete=potatoes');
      cy.get('a[href^="https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff"]');
    });
  });
});
