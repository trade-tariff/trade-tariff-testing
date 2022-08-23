/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
describe.skip('| quotasErrorMessage.spec | interim error message on quota orders |', function() {
  const QuotaOrderNos = ['052106', '052012', '052105'];
  const CommCodes =['0204230019', '0204507100', '0204230011'];
  const ErrMessage = 'There is currently a known issue with the balance and status of this quota. We are working hard to resolve this issue as soon as possible. Until further notice the quota remains ‘open’ and quota claims should be submitted as normal.';
  it('Quota search Tool - error message', function() {
    for (let i=0; i<QuotaOrderNos.length; i++) {
      cy.visit('/quota_search');
      cy.contains('Search for quotas');
      cy.get('input#order_number')
          .click().clear().type(`${QuotaOrderNos[i]}`);
      cy.get('form#new_search > input[name=\'new_search\']').click();
      cy.contains('Quota search results');
      cy.get('.govuk-table__row').contains(`${QuotaOrderNos[i]}`);
      cy.contains(`${QuotaOrderNos[i]}`).click();
      cy.get('.tariff-info')
          .contains(ErrMessage);
      cy.get('.close [href]').click();
    }
  });
  it('Quota Measures view commodity page - error message', function() {
    for (let i=0; i<QuotaOrderNos.length; i++) {
      cy.visit(`/commodities/${CommCodes[i]}`);
      cy.get('.small-table.govuk-table').contains(`${QuotaOrderNos[i]}`).click();
      cy.get('.tariff-info')
          .contains(ErrMessage);
      cy.get('.close [href]').click();
    }
  });
});
