/* eslint-disable max-len */
describe('| linksSTW-OTT.spec | STW links on OTT sections page |', function() {
  const countries = ['uk', 'xi'];
  for (let i =0; i<countries.length; i++) {
    it(`| ${countries[i]} - Advance tariff rulings | Validate STW copy and links on OTT main page `, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.contains('Advance tariff rulings');
      cy.contains('For more help in classifying your commodity, you can search for advance tariff rulings');
      cy.get('.feature-panel:nth-child(4) .govuk-body:nth-child(2) .govuk-link').should('have.attr', 'href', 'https://www.tax.service.gov.uk/search-for-advance-tariff-rulings/search');
      cy.contains('Advance tariff rulings allow you to get a legally binding decision on the commodity code to use when importing into or exporting goods.');
      cy.get('p:nth-of-type(3) > .govuk-link').should('have.attr', 'href', 'https://www.gov.uk/guidance/apply-for-an-advance-tariff-ruling');
      cy.contains('Find out more about advance tariff rulings.');
      cy.contains('Contact HMRC if you need help finding the right commodity code for your goods');
      cy.get('p:nth-of-type(4) > .govuk-link').should('have.attr', 'href', 'https://www.gov.uk/guidance/ask-hmrc-for-advice-on-classifying-your-goods');
    });
    it(`| ${countries[i]} - Check how to import or export goods | Validate STW copy and links on OTT main page `, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.contains('Use the \'Check how to import or export goods\' service to get information about importing and exporting, including:');

      cy.contains('how to register your business for trading');
      cy.contains('which licences and certificates you need for your goods');
      cy.contains('paying the right tax and duty for your goods');
      cy.contains('how to make declarations for your goods to clear the UK border');
      cy.contains('which paperwork you need to keep');
      cy.get('.feature-panel.last-feature-panel > .govuk-body > .govuk-link').should('have.attr', 'href', 'https://www.gov.uk/check-how-to-import-export');
    });
  }
});
