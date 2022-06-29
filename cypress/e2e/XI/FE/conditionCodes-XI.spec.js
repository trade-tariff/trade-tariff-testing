/* eslint-disable no-unused-vars */
describe('| conditionCodes-XI.spec.js | Validating condition codes YA,YB,YC,YD |', function() {
  it('validate condition code details', function() {
    cy.visit('/xi/commodities/2903430010#xi_import_controls');
    cy.get('[data-module] .govuk-table:nth-child(9) [tabindex=\'-1\']:nth-of-type(1) .conditions-col [href]').click();
    cy.contains('Import control of fluorinated greenhouse gases for All countries');
    cy.contains('YA: Other conditions');
    cy.contains('YB: Other conditions');
    cy.contains('YC: Other conditions');
    cy.contains('YD: Other conditions');
    cy.get('.govuk-table__row').contains('Document code');
    cy.get('.govuk-table__row').contains('Requirement');
    cy.get('.govuk-table__row').contains('Action');
    cy.get('.govuk-table__row').contains('Duty expression').should('not.exist');
  });
});
