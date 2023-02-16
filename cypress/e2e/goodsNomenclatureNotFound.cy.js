describe('goodsNomenclature not found behaviour', function() {
  const visitOpts = {failOnStatusCode: false};

  context('when visiting a heading that does not exist on a given date for the xi service', function() {
    const path = '/xi/headings/0503';

    it('shows the heading not found page', function() {
      cy.visit(path, visitOpts);
      cy.checkValidityPeriodsCount(1);
    });
  });

  context('when visiting a subheading that does not exist on a given date for the xi service', function() {
    const path = '/xi/subheadings/7019590081-10';

    it('shows the subheading not found page', function() {
      cy.visit(path, visitOpts);
      cy.checkValidityPeriodsCount(1);
      cy.checkDerivingGoodsNomenclaturesCount(3);
    });
  });

  context('when visiting a commodity that does not exist on a given date for the xi service', function() {
    const path = '/xi/commodities/0809301000';

    it('shows the commodity not found page', function() {
      cy.visit(path, visitOpts);
      cy.checkValidityPeriodsCount(2);
      cy.checkDerivingGoodsNomenclaturesCount(4);
    });
  });

  context('when visiting a heading that does not exist on a given date for the uk service', function() {
    const path = '/headings/0503';

    it('shows the heading not found page', function() {
      cy.visit(path, visitOpts);
      cy.checkValidityPeriodsCount(1);
    });
  });

  context('when visiting a subheading that does not exist on a given date for the uk service', function() {
    const path = '/subheadings/7019590081-10';

    it('shows the subheading not found page', function() {
      cy.visit(path, visitOpts);
      cy.checkValidityPeriodsCount(1);
      cy.checkDerivingGoodsNomenclaturesCount(3);
    });
  });

  context('when visiting a commodity that does not exist on a given date for the uk service', function() {
    const path = '/commodities/0809301000';

    it('shows the commodity not found page', function() {
      cy.visit(path, visitOpts);
      cy.checkValidityPeriodsCount(2);
      cy.checkDerivingGoodsNomenclaturesCount(4);
    });
  });
});
