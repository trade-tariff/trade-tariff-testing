describe('Verify guidance pages', function() {
  it('Classifying your goods - guidance page', function() {
    cy.visit('/find_commodity');
    cy.get('#recent-news').contains('Classifying your goods').should('have.attr', 'href', '/howto/commodity-codes');
    cy.get('#recent-news').contains('Classifying your goods').click();
    cy.url().should('include', '/howto/commodity-codes');
    cy.get('.govuk-breadcrumbs__list').contains('Classifying your goods');
    cy.contains('Import guidance');
    cy.contains('Classifying your goods');
  });
  it('How to use quotas - guidance page', function() {
    cy.visit('/find_commodity');
    cy.get('#recent-news').contains('How to use quotas').should('have.attr', 'href', '/howto/quotas');
    cy.get('#recent-news').contains('How to use quotas').click();
    cy.contains('Import guidance');
    cy.contains('How to use quotas');
    cy.url().should('include', '/howto/quotas');
  });
  it('How to value your goods for import or export - guidance page', function() {
    cy.visit('/find_commodity');
    cy.get('#recent-news')
        .contains('How to value your goods for import or export')
        .should('have.attr', 'href', '/howto/valuation');
    cy.get('#recent-news').contains('How to value your goods for import or export').click();
    cy.contains('Import guidance');
    cy.contains('How to value your goods for import or export');
    cy.url().should('include', '/howto/valuation');
  });
  it('What are trade remedies, safeguards and retaliatory duties? - guidance page', function() {
    cy.visit('/find_commodity');
    cy.get('#recent-news')
        .contains('What are trade remedies, safeguards and retaliatory duties?')
        .should('have.attr', 'href', '/howto/trade-remedies');
    cy.get('#recent-news')
        .contains('What are trade remedies, safeguards and retaliatory duties?').click();
    cy.contains('Import guidance');
    cy.contains('What are trade remedies, safeguards and retaliatory duties?');
    cy.url().should('include', '/howto/trade-remedies');
  });
  it('What is origin and why is it important for international trade? - guidance page', function() {
    cy.visit('/find_commodity');
    cy.get('#recent-news')
        .contains('What is origin and why is it important for international trade?')
        .should('have.attr', 'href', '/howto/origin');
    cy.get('#recent-news')
        .contains('What is origin and why is it important for international trade?').click();
    cy.contains('Import guidance');
    cy.contains('What is origin and why is it important for international trade?');
    cy.url().should('include', '/howto/origin');
  });
  it('Verify guidance links on the help page', function() {
    cy.visit('/help');
    cy.contains('How to classify your goods: what are commodity codes?').should('have.attr', 'href', '/howto/commodity-codes');
    cy.contains('How to classify your goods: what are commodity codes?').click();
    cy.url().should('include', '/howto/commodity-codes');
    cy.go('back');
    cy.contains('A background to quotas').should('have.attr', 'href', '/howto/quotas');
    cy.contains('A background to quotas').click();
    cy.url().should('include', '/howto/quotas');
    cy.go('back');
    cy.contains('How to value your goods for import or export')
        .should('have.attr', 'href', '/howto/valuation');
    cy.contains('How to value your goods for import or export').click();
    cy.url().should('include', '/howto/valuation');
    cy.go('back');
    cy.contains('What are trade remedies, safeguards and retaliatory duties?')
        .should('have.attr', 'href', '/howto/trade-remedies');
    cy.contains('What are trade remedies, safeguards and retaliatory duties?').click();
    cy.contains('Import guidance');
    cy.contains('What are trade remedies, safeguards and retaliatory duties?');
    cy.url().should('include', '/howto/trade-remedies');
    cy.go('back');
    cy.contains('What is origin and why is it important for international trade?')
        .should('have.attr', 'href', '/howto/origin');
    cy.contains('What is origin and why is it important for international trade?').click();
    cy.contains('Import guidance');
    cy.contains('What is origin and why is it important for international trade?');
    cy.url().should('include', '/howto/origin');
  });
});
