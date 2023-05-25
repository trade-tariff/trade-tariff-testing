describe('commodity supplementary unit classifications', function() {
  context('when on the UK service', function() {
    it('shows the correct supplementary units classification', function() {
      cy.visit('/uk/commodities/6401929000');
      cy.contains('Number of pairs (pa)');
    });

    it('shows the correct excise units classification', function() {
      cy.visit('/uk/commodities/2402900000');
      cy.contains('(1000 items, retail price)');
    });

    it('shows the correct duty units classification', function() {
      cy.visit('/uk/commodities/0402109900');
      cy.contains('(hectokilogram, kilogram of lactic matter)');
    });

    it('shows the correct no units classification', function() {
      cy.visit('/uk/commodities/6406109010');
      cy.contains('There are no supplementary unit measures');
    });
  });

  context('when on the XI service', function() {
    it('shows the correct supplementary units classification', function() {
      cy.visit('/xi/commodities/6401929000');
      cy.contains('Number of pairs (pa)');
    });

    it('shows the correct duty units classification', function() {
      cy.visit('/xi/commodities/0402109900');
      cy.contains('(hectokilogram, kilogram of lactic matter)');
    });

    it('shows the correct excise units classification', function() {
      cy.visit('/xi/commodities/2402900000');
      cy.contains('(1000 items, retail price)');
    });

    it('shows the correct no units classification', function() {
      cy.visit('/xi/commodities/6406109010');
      cy.contains('There are no supplementary unit measures');
    });
  });
});
