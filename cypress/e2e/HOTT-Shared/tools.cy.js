describe('tools', function() {
  context('when on the UK service', () => {
    beforeEach(() => {
      cy.visit('/tools');
    });

    it('has the right links', function() {
      cy.contains('Tariff tools');
      cy.get('.govuk-header').contains('Tools');

      cy.get('a[href="/simplified_procedure_value"]');
      cy.get('a[href="/quota_search"]');
      cy.get('a[href="/certificate_search"]');
      cy.get('a[href="/additional_code_search"]');
      cy.get('a[href="/footnote_search"]');
      cy.get('a[href="/chemical_search"]');
      cy.get('a[href="/meursing_lookup/steps/start"]').should('not.exist');
    });
  });

  context('when on the XI service', () => {
    beforeEach(() => {
      cy.visit('/xi/tools');
    });

    it('has the right links', function() {
      cy.contains('Tariff tools');
      cy.get('.govuk-header').contains('Tools');

      cy.get('a[href="/xi/simplified_procedure_value"]');
      cy.get('a[href="/xi/certificate_search"]');
      cy.get('a[href="/xi/additional_code_search"]');
      cy.get('a[href="/xi/footnote_search"]');
      cy.get('a[href="/xi/chemical_search"]');
      cy.get('a[href="/xi/meursing_lookup/steps/start"]');

      cy.get('a[href="/xi/quota_search"]').should('not.exist');
    });
  });
});

