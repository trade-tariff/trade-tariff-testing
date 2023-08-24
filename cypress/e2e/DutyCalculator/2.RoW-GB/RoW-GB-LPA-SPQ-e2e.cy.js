describe('| RoW-GB-LPA-SPQ-e2e | AlcoholDuties |', function() {
  beforeEach(() => {
    // given a commodity with excise measures
    cy.visit('/duty-calculator/uk/2208701000/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Antigua and Barbuda'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
  });

  it('RoW 🇸🇬 Antigua and Barbuda - 🇬🇧 GB - Alcohol duties calculations for simple LPA components', function() {
    // when I pick an asv percentage that applies a negative condition action
    cy.quantity({lpa: '1000', asv: '1.2', spr: '3'});

    // and I pick an excise code that picks a measure and applies the targeted conditions
    cy.exciseCode('301');
    cy.confirmPage();
    cy.dutyPage();

    // then I should not see Excise calculations
    cy.should('not.contain', 'Excise');

    // when I go back and pick an asv percentage that applies a positive condition action
    cy.go('back');
    cy.go('back');
    cy.go('back');
    cy.quantity({lpa: '1000', asv: '1.1', spr: '3'});
    cy.exciseCode('301');
    cy.confirmPage();
    cy.dutyPage();

    // then I should see Excise calculations
    cy.contains('Excise');
    cy.contains('9.27 GBP / l alc. 100%');
    cy.contains('£9,270.00'); // 1000 * 1.1 * 9.27
  });

  it('RoW 🇸🇬 Antigua and Barbuda - 🇬🇧 GB - Alcohol duties calculations for SPQ-based components', function() {
    // when I pick an asv percentage that applies a negative condition action
    cy.quantity({lpa: '1000', asv: '1.2', spr: '5'});

    // and I pick an excise code that picks a measure and applies the targeted conditions
    cy.exciseCode('370');
    cy.confirmPage();
    cy.dutyPage();

    // then I should not see Excise calculations
    cy.should('not.contain', 'Excise');

    // when I go back and pick an asv percentage that applies a positive condition action
    cy.go('back');
    cy.go('back');
    cy.go('back');
    cy.quantity({lpa: '84', asv: '8.4', spr: '5'});
    cy.exciseCode('370');
    cy.confirmPage();
    cy.dutyPage();

    // then I should see Excise calculations
    cy.contains('Excise');
    cy.contains('Spirits at least 3.5 but less than 8.5% & eligible for SPR');

    cy.contains('(£24.77 - SPR discount) / vol% / hl');
    cy.contains('£1,660.68'); // 24.77 * 84 - (1 * 84 * 5)
  });
});
