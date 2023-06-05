describe('🇬🇧 💡 | spvtools-UK.spec |', function() {
  it('XI - Verify SPV tools link on tools page', function() {
    cy.visit('/xi/tools');
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Check simplified procedure value rates for fresh fruit and vegetables');
    cy.contains('Use simplified procedure value rates for fresh fruit and vegetable goods that you import.');
  });
  it('XI - Verify SPV page', function() {
    cy.visit('/xi/tools');
    cy.get('a[href^=\'/xi/simplified_procedure_value\']').click();
    cy.url().should('include', '/simplified_procedure_value');
    cy.get('.govuk-breadcrumbs__list').contains('Simplified procedure value rates');
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Check simplified procedure value rates for fresh fruit and vegetables');
    cy.contains('When to use a simplified procedure value');
    cy.contains('Goods that are excluded');
    cy.contains('Rates for period');
    cy.contains('Select unit price period start date');
  });
  it('XI - Click and verify unit perice start date and SPV table data', function() {
    cy.visit('/xi/tools');
    cy.get('a[href^=\'/xi/simplified_procedure_value\']').click();
    cy.url().should('include', '/simplified_procedure_value');
    cy.get('.govuk-table__head .govuk-table__header').contains('Simplified procedure code');
    cy.get('#validity_start_date').select(0);
    cy.contains('View rates for selected date').click();
    cy.clickAndVerifySVPCodeCommCodeLink('2.120.1');
  });
  it('XI- Click and verify unit price start date and comm code link in SPV table', function() {
    cy.visit('/xi/tools');
    cy.get('a[href^=\'/xi/simplified_procedure_value\']').click();
    cy.url().should('include', '/simplified_procedure_value');
    cy.get('.govuk-table__head .govuk-table__header').contains('Simplified procedure code');
    cy.get('#validity_start_date').select(0);
    cy.contains('View rates for selected date').click();
    cy.clickAndVerifySVPCodeCommCodeLink('0709200010');
  });
  it('XI - Click validity start date and select SPV start date as other than default one', function() {
    cy.visit('/xi/tools');
    cy.get('a[href^=\'/xi/simplified_procedure_value\']').click();
    cy.url().should('include', '/simplified_procedure_value');
    cy.get('.govuk-table__head .govuk-table__header').contains('Simplified procedure code');
    cy.get('#validity_start_date').select(2);
    cy.contains('View rates for selected date').click();
    cy.clickAndVerifySVPCodeCommCodeLink('2.150');
  });
  it('XI - Verify SPV code 2.150 page', function() {
    cy.visit('/xi/simplified_procedure_value?simplified_procedural_code=2.150');
    cy.verifySPVCodePage('2.150');
  });
  it('XI - Verify Links on SPV page', function() {
    cy.visit('/xi/tools');
    cy.get('a[href^=\'/xi/simplified_procedure_value\']').click();
    cy.svpPageLinks();
  });
  it('XI - Verify Links on SPV code page', function() {
    cy.visit('/xi/simplified_procedure_value?simplified_procedural_code=2.150');
    cy.svpPageLinks();
  });
});
