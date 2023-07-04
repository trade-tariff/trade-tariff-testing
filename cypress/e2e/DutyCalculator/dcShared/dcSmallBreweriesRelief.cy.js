describe('🧮 | dcSmallBreweriesRelief | Alcohol Duties for Small Breweries Relief |', function() {
  it('UK - Removes Small Breweries Relief Static Message', function() {
    cy.visit('/duty-calculator/uk/2203000100/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Israel'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.alcoholImportQuantity({asv: '40', ltr: '1000'});
    cy.contains('Calculate import duties');
    cy.contains('Which class of excise is applicable to your trade?');
    const msg = 'Please note that the work to calculate the Small Breweries\' Relief (SBR) is in development and will be available shortly';
    cy.should('not.contain', `${msg}`);
  });
  it('UK - Small Breweries Relief - Additional Code Exclusions/Greyed out', function() {
    cy.visit('/duty-calculator/uk/2203000900/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Japan'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.alcoholImportQuantity({asv: '5', ltr: '200'});
    cy.contains('Calculate import duties');
    cy.contains('Which class of excise is applicable to your trade?');
    const msg = 'Please note that the work to calculate the Small Breweries\' Relief (SBR) is in development and will be available shortly';
    cy.should('not.contain', `${msg}`);
    cy.verifyAdditionalCodesExclusion();
  });
});
