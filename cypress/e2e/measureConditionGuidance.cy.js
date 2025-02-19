describe('Measure condition popup CDS guidance', function() {
  context('when on the UK service', function() {
    it('shows guidance', function() {
      cy.visit('/commodities/6403990510#import');
      cy.commodityImportGuidance();
      cy.commodityExportGuidance();
    });
  });

  context('when on the XI service', function() {
    it('shows guidance', function() {
      cy.visit('/xi/commodities/6403990510#import');
      cy.commodityImportGuidance();
      cy.commodityExportGuidance();
    });
  });
});
