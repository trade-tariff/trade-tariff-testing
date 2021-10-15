describe('test spec', function() {
  it('test', function() {
    const num = '0409000000';
    const m = num.substring(0, 4);
    console.log(m);
  });
  it('mainpage', function() {
    cy.visit('/sections');
    console.log(cy.title());
    cy.title().should('match', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it.only('test spec', function() {
    cy.visit('/sections');
    cy.contains('@Look up commodity codes, duty and VAT rates');
  });
});
