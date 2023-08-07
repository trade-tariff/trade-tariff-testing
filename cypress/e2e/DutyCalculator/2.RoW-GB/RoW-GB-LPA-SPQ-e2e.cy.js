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
    // when I pick an asv percentage with 3.49 that applies a negative condition action
    cy.quantity({lpa: '1000', asv: '3.49', spr: '5'});

    // and I pick an excise code that picks a measure and applies the targeted conditions
    cy.exciseCode('380');
    cy.confirmPage();
    cy.dutyPage();

    // then I should not see Excise calculations
    cy.should('not.contain', 'Excise');
    cy.go('back');
    cy.go('back');
    cy.go('back');

    // when I pick an asv percentage with 8.5 that applies a negative condition action
    cy.quantity({lpa: '1000', asv: '8.5', spr: '5'});

    // and I pick an excise code that picks a measure and applies the targeted conditions
    cy.exciseCode('380');
    cy.confirmPage();
    cy.dutyPage();

    // then I should not see Excise calculations
    cy.should('not.contain', 'Excise');

    // when I go back and pick an asv percentage with 3.5 that applies a positive condition action 
    cy.go('back');
    cy.go('back');
    cy.go('back');
    cy.quantity({lpa: '1000', asv: '3.5', spr: '3'});
    cy.exciseCode('380');
    cy.confirmPage();
    cy.dutyPage();

    // then I should see Excise calculations
    cy.contains('Excise');
    cy.contains('19.08 GBP / l alc. 100% - £1.00 / for each litre of pure alcohol, multiplied by the SPR discount');
    cy.contains('£16,080.00'); // 19.08 * 1000 - (1 * 1000 * 3)
    // when I go back and pick an asv percentage that applies a positive condition action
    cy.go('back');
    cy.go('back');
    cy.go('back');
    cy.quantity({lpa: '84', asv: '8.4', spr: '5'});
    cy.exciseCode('380');
    cy.confirmPage();
    cy.dutyPage();

    // then I should see Excise calculations
    cy.contains('Excise');
    cy.contains('19.08 GBP / l alc. 100% - £1.00 / for each litre of pure alcohol, multiplied by the SPR discount');
    cy.contains('£1,182.72'); // 19.08 * 84 - (1 * 84 * 5)
   
  });

  after(() => {
     // runs once after all tests in the block
    // when I go back and pick an asv(ABV) percentage that exceeds 100.00%
    cy.go('back');
    cy.go('back');
    cy.go('back');
    cy.quantity({asv: '101'});
     //Then Validation message should provide and stop to proceed further 
    cy.contains('Enter an import quantity value less than or equal too 100. Enter the alcohol by volume (ABV) percentage');
     // when I go back and pick an asv(ABV) percentage that equal to 100.00%
     cy.go('back');
     cy.quantity({lpa: '1000', asv: '100.00', spr: '3'});
     cy.exciseCode('301');
     cy.confirmPage();
     cy.dutyPage();
      // then I should not see Excise calculations
     cy.should('not.contain', 'Excise');
  })
});



