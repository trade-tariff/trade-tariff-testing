describe.skip('test spec', function() {
  it('test', function() {
    const num = '0409000000';
    const m = num.substring(0, 4);
    console.log(m);
  });
  it.only('mainpage', function() {
    cy.visit('/sections');
    console.log(cy.title());
    cy.visit('/chapters/01');
    console.log(cy.title());

    cy.visit('/xi/sections');
    console.log(cy.title());
  //  cy.title().should('match', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('test spec', function() {
    cy.visit('/sections');
    cy.contains('Look up commodity codes, duty and VAT rates');
  });
});
