/* eslint-disable max-len */
Cypress.Commands.add('commPage', ()=>{
  cy.contains('Look up commodity codes, import duties, taxes and controls');
  cy.title().should('matches', /UK Integrated Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
});
Cypress.Commands.add('newsBannerUK', ()=>{
  cy.contains('Are you importing goods into Northern Ireland?');
  // check correct text is displayed on banner as per UK - If they are at risk
  // link to not at risk
  cy.get('div[role=\'region\'] p > a:nth-of-type(1)').click();
  cy.contains('Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU');
  cy.go(-1);
  cy.contains('If you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate ');
  cy.contains('if your goods are not ‘at risk’ of onward movement to the EU');
  cy.contains('If they are at risk of onward movement to the EU, use the');
});
Cypress.Commands.add('newsBannerXI', ()=>{
  cy.contains('Are your goods at risk of onward movement to the EU?');
  // check correct text is displayed on banner as per UK - If they are at risk
  // link to not at risk
  cy.get('div[role=\'region\'] p > a:nth-of-type(1)').click();
  cy.contains('Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU');
  cy.go(-1);
  cy.contains('If you’re bringing goods into Northern Ireland from outside the UK and the EU, your import may be subject to EU import duty rates');
  cy.contains('if your goods are ‘at risk’ of onward movement to the EU');
  cy.contains('. If they are not at risk of onward movement to the EU, use the ');
});
Cypress.Commands.add('contextSelector', ()=>{
  cy.get('.govuk-table__body').contains('Classification');
  cy.get('.govuk-table__body').contains('Date of trade');
});
