describe('Verify Webchat URL link and access on various pages and popup after 30 seconds on comm code page', function() {
  ['', 'xi'].forEach(function(country) {
    it(`${country} - verify webchat link on help page`, function() {
      cy.visit(`${country}/help`);
      cy.contains('Alternatively, you can use our Digital Assistant (opens in new tab) to get help on classifying your goods.');
      cy.get('a[href^="https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff"]').contains('Digital Assistant (opens in new tab)');
    });
    it(`${country} - Search and verify webchat message and link is displayed`, function() {
      cy.visit(`${country}/find_commodity`);
      cy.searchForCommodity('xxxx');
      cy.contains('Getting help from HMRC if you need to find a commodity code');
      cy.contains('If you cannot find the right commodity code for your goods ,');
      cy.contains('you can contact HMRC for advice or for a decision on your goods.');
      cy.contains('Alternatively, you can use our Digital Assistant (opens in new tab) to get help on classifying your goods.');
      cy.get('a[href^="https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff"]').contains('Digital Assistant (opens in new tab)');
    });
    it(`${country} - webchat link is displayed on search results page`, function() {
      cy.visit(`${country}/search?q=potatoes&input-autocomplete=potatoes`);
      cy.contains('Getting help from HMRC if you need to find a commodity code');
      cy.contains('If you cannot find the right commodity code for your goods ,');
      cy.contains('you can contact HMRC for advice or for a decision on your goods.');
      cy.contains('Alternatively, you can use our Digital Assistant (opens in new tab) to get help on classifying your goods.');
      cy.get('a[href^="https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff"]').contains('Digital Assistant (opens in new tab)');
    });
  });
});
