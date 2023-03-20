describe('additional code duties table', function() {
  context('when on the UK service', function() {
    it('shows the correct heading additional code duties table', function() {
      cy.visit('/headings/3906');
      cy.get('.govuk-table.additional-code-table').contains('Depends on additional code');
      cy.get('.govuk-table.additional-code-table').contains('Code');
      cy.get('.govuk-table.additional-code-table').contains('Duty');
      cy.get('.govuk-table.additional-code-table').contains('2500');
      cy.get('.govuk-table.additional-code-table').contains('0.00 %');
      cy.get('.govuk-table.additional-code-table').contains('2501');
      cy.get('.govuk-table.additional-code-table').contains('6.00 %');
      cy.get('.govuk-table.additional-code-table').contains('No code');
    });

    it('shows the correct subheading additional code duties table', function() {
      cy.visit('/subheadings/3204130000-80');
      cy.get('.govuk-table.additional-code-table').contains('Depends on additional code');
      cy.get('.govuk-table.additional-code-table').contains('Code');
      cy.get('.govuk-table.additional-code-table').contains('Duty');
      cy.get('.govuk-table.additional-code-table').contains('2500');
      cy.get('.govuk-table.additional-code-table').contains('0.00 %');
      cy.get('.govuk-table.additional-code-table').contains('2501');
      cy.get('.govuk-table.additional-code-table').contains('6.00 %');
      cy.get('.govuk-table.additional-code-table').contains('No code');
    });
  });

  context('when on the XI service', function() {
    it('shows the correct heading additional code duties table', function() {
      cy.visit('/xi/headings/3906');
      cy.get('.govuk-table.additional-code-table').contains('Depends on additional code');
      cy.get('.govuk-table.additional-code-table').contains('Code');
      cy.get('.govuk-table.additional-code-table').contains('Duty');
      cy.get('.govuk-table.additional-code-table').contains('0.00 %');
      cy.get('.govuk-table.additional-code-table').contains('6.50 %');
    });

    it('shows the correct subheading additional code duties table', function() {
      cy.visit('/xi/subheadings/3204130000-80');
      cy.get('.govuk-table.additional-code-table').contains('Depends on additional code');
      cy.get('.govuk-table.additional-code-table').contains('Code');
      cy.get('.govuk-table.additional-code-table').contains('Duty');
      cy.get('.govuk-table.additional-code-table').contains('2500');
      cy.get('.govuk-table.additional-code-table').contains('0.00 %');
      cy.get('.govuk-table.additional-code-table').contains('2501');
      cy.get('.govuk-table.additional-code-table').contains('6.50 %');
    });
  });
});
