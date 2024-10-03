describe('commodity supplementary units', function() {
  context('when on the UK service', function() {
    it('shows the correct supplementary units supplementary unit', function() {
      cy.visit('/uk/commodities/6401929000');
      cy.contains('Number of pairs (pa)');
    });

    it('shows the correct excise units supplementary unit', function() {
      cy.visit('/uk/commodities/0710809550');
      cy.contains('(1000 items, retail price)');
    });

    it('shows the correct duty units supplementary unit', function() {
      cy.visit('/uk/commodities/0402109900');
      cy.contains('(kilogram of lactic matter)');
    });

    it('shows the correct no units supplementary unit', function() {
      cy.visit('/uk/commodities/6406109010');
      cy.contains('There are no supplementary unit measures');
    });

    it('Display correct supplementary units with respect to user selected country/group with a supplementary unit', function() {
      // given I am on a commodity page where the commodity has no supplementary units for all countries
      // when I select a country that has a supplementary unit
      cy.visit('/uk/commodities/1704909912?country=CR');
      // then I should see the supplementary unit
      cy.get('.autocomplete__wrapper > ul >li.autocomplete__option').contains('Costa Rica');
      cy.contains('Kilogram (kg/raw sugar)');
      // when I select no country
      cy.visit('/uk/commodities/1704909912');
      cy.get('.autocomplete__wrapper > ul >li.autocomplete__option').contains('All countries');
      // then I should see the no supplementary unit message
      cy.contains('There are no supplementary units globally assigned to this commodity. Select a country of import / export to check');
      cy.contains('on supplementary units for a specific country, or scroll down to the import duties section.');
    });
  });

  context('when on the XI service', function() {
    it('shows the correct supplementary units supplementary unit', function() {
      cy.visit('/xi/commodities/6401929000');
      cy.contains('Number of pairs (pa)');
    });

    it('shows the correct duty units supplementary unit', function() {
      cy.visit('/xi/commodities/0402109900');
      cy.contains('(kilogram of lactic matter)');
    });

    it('shows the correct excise units supplementary unit', function() {
      cy.visit('/xi/commodities/0710809550');
      cy.contains('(1000 items, retail price)');
    });

    it('shows the correct no units supplementary unit', function() {
      cy.visit('/xi/commodities/6406109010');
      cy.contains('There are no supplementary unit measures');
    });

    it('shows the correct supplementary unit when the uk declarable is missing', function() {
      cy.visit('/xi/commodities/9919000060');
      cy.contains('There are no supplementary unit measures');
    });

    it('Display correct supplementary units with respect to user selected country/group with a supplementary unit', function() {
      // given I am on a commodity page where the commodity has no supplementary units for all countries
      // when I select a country that has a supplementary unit
      cy.visit('/xi/commodities/1704909912?country=CR');
      // then I should see the supplementary unit
      cy.get('.autocomplete__wrapper > ul >li.autocomplete__option').contains('Costa Rica');
      cy.contains('Kilogram (kg/raw sugar)');
      // when I select no country
      cy.visit('/xi/commodities/1704909912');
      cy.get('.autocomplete__wrapper > ul >li.autocomplete__option').contains('All countries');
      // then I should see the no supplementary unit message
      cy.contains('There are no supplementary units globally assigned to this commodity. Select a country of import / export to check');
      cy.contains('on supplementary units for a specific country, or scroll down to the import duties section.');
    });
  });
});
