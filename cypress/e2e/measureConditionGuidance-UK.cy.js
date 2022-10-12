describe('Measure condition popup CHIEF/CDS guidance', function() {
  context('when on the UK service', function() {
    it('shows guidance', function() {
      cy.visit('/commodities/6403990510#import');
      cy.get('#measure-20174652').contains('Conditions').click().wait(200);
      cy.commodityGuidance();
    });
  });

  context('when on the XI service', function() {
    it('shows guidance', function() {
      cy.visit('/xi/commodities/6403990510#import');
      cy.get('#measure-20174652').contains('Conditions').click().wait(200);
      cy.commodityGuidance();
    });
  });
});
