describe('| meursingComm.spec.js | Store Commodity value in session for Meursing , Meursing on Comm Page', function() {
  it('| meursing - Store Commodity code + Meursing code in Session |', function() {
    const commcode = ['1905311100', '1704906500', '1704909992'];
    for (let i=0; i<commcode.length; i++) {
      cy.clearCookies();
      cy.visit(`/xi/commodities/${commcode[i]}`);
      cy.contains('Tools').click();
      cy.contains('Meursing code finder').click();
      cy.get('a[role=\'button\']').click();
      cy.contains('0 - 4.99').click();
      cy.contains('Continue').click();
      cy.contains('5 - 29.99').click();
      cy.contains('Continue').click();
      cy.contains('1.5 - 2.99').click();
      cy.contains('Continue').click();
      cy.contains('2.5 - 5.99').click();
      cy.contains('Continue').click();
      cy.contains('Check your answers');
      cy.contains('Continue').click();
      cy.contains(`The Meursing additional code for a product with this composition is 7121.`);
      cy.contains('Use these four digits together with the ten-digit commodity code from Trade Tariff to work out duties applicable ');
      cy.contains('to certain complex agri-foods on the Northern Ireland Tariff, when your import is considered to be \'at risk\'.');
      cy.contains(`Return to ${commcode[i]}`).click();
      cy.checkCommPage(`${commcode[i]}`);
      cy.get('a#tab_import').click();
      cy.get('input#meursing-lookup-result-meursing-additional-code-id-field').should('have.value', '121');
      cy.contains('Clear additional code').click();
      cy.get('input#meursing-lookup-result-meursing-additional-code-id-field').should('not.have.value', '121');
    }
  });
  it('| meursing calculator link on commodity import section |', function() {
    cy.visit('xi/commodities/1905311100#import');
    cy.contains('Enter a \'Meursing code\' to work out applicable duties');
    cy.contains('This commodity code features duties which may be dependent on the sugar, flour, ');
    cy.contains('milk fat and milk protein content. To fully define the applicable duties, you need ');
    cy.contains('to specify the additional code that defines the content of these ingredients.');
    cy.contains('Enter the 3-digit additional code');
    cy.contains('If you know the additional code for your commodity, enter it in the box below. ');
    cy.contains('If you do not know the code, then use the Meursing code finder to find the additional code. ');
    cy.contains('You will be able to return to this page once you have found the right Meursing additional code.');
    // click on the meursing link
    cy.get('div#meursing-lookup-result-meursing-additional-code-id-hint > .govuk-link').click();
    cy.contains('Look up a Meursing code');
    cy.go('back');
    cy.checkCommPage('1905311100');
    cy.get('input#meursing-lookup-result-meursing-additional-code-id-field').type('000');
    cy.contains('Save code and update duties').click();

    // add validations for calculations with /without code
  });
});
