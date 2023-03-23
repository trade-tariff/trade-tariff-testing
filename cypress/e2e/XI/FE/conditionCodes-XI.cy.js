describe('| conditionCodes-XI.spec.js | Validating condition codes YA,YB,YC,YD |', function() {
  it('validate condition code details', function() {
    cy.visit('/xi/commodities/2903430010#xi_import_controls');
    cy.get('#measure-3872643').contains('Conditions').click();
    cy.contains('Import control of fluorinated greenhouse gases for All countries');
    cy.contains('Y955');
    cy.contains('Y926');
    cy.contains('Y054');
    cy.contains('Y125');
    cy.get('.info-inner').contains('Document code');
    cy.get('.info-inner').contains('Requirement');
    cy.get('.info-inner').contains('Action');
    cy.get('.info-inner').contains('Duty expression').should('not.exist');
  });
});
