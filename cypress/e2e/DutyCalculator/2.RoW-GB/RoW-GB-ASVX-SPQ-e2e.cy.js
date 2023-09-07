describe('| RoW-GB-ASVX-SPQ-e2e | AlcoholDuties |', function() {
  beforeEach(() => {
    // given a commodity with excise measures
    cy.visit('/duty-calculator/uk/2203000100/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Antigua and Barbuda'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // when I pick an asv percentage that applies a negative condition action
    cy.quantity({ltr: '1000', asv: '1.2', spr: '3'});

    // and I pick an excise code that picks a measure and applies the targeted conditions
    cy.exciseCode('311');
    cy.confirmPage();
    cy.dutyPage();

    // then I should not see Excise calculations
    cy.should('not.contain', 'Excise');

    cy.visit('/duty-calculator/measure-amount');
  });

  it('RoW 🇸🇬 Antigua and Barbuda - 🇬🇧 GB - Alcohol duties calculations for simple ASVX components', function() {
    // when I go back and pick an asv percentage that applies a positive condition action
    cy.quantity({ltr: '1000', asv: '3.49', spr: '5'});
    cy.exciseCode('311');
    cy.confirmPage();
    cy.dutyPage();

    // then I should see Excise calculations
    cy.contains('Excise');
    cy.contains('9.27 GBP / % vol/hl');
    cy.contains('£323.52'); // 9.27 * 3.49 * 10
  });

  it('RoW 🇸🇬 Antigua and Barbuda - 🇬🇧 GB - Alcohol duties calculations for SPQ-based components', function() {
    // when I go back and pick an asv percentage that applies a positive condition action
    cy.quantity({ltr: '1000', asv: '8.4', spr: '5'});
    cy.exciseCode('366');
    cy.confirmPage();
    cy.dutyPage();

    // then I should see Excise calculations
    cy.contains('Excise');
    cy.contains('Beer at least 3.5 but less than 8.5% & eligible for SPR');
    cy.contains('(£21.01 - SPR discount) / vol% / hl');
    cy.contains('£1,344.84'); // 21.01 * 8.4 * 10 * 7
  });
});
