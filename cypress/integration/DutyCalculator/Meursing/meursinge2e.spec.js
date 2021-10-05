describe('| meursinge2e | end to end journeys', function() {
  it('| meursing code e2e journeys | 4 options |', function() {
    cy.visit('/xi/meursing_lookup/steps/start');

    const starch = ['0 - 4.99', '75 or more', '25 - 49.99', '0 - 4.99'];
    const sugar = ['5 - 29.99', '5 or more', '30 - 49.99', '0 - 4.99'];
    const milkfat = ['1.5 - 2.99', '18 - 25.99', '26 - 39.99', '0 - 1.49'];
    const milkprotein = ['2.5 - 5.99', '0 - 5.99', '0 - 5.99', '0 - 2.49'];
    const code = ['7121', '7979', '7992', '7000'];
    for (let i=0; i<starch.length; i++) {
      cy.get('a[role=\'button\']').click();
      cy.contains(`${starch[i]}`).click();
      cy.contains('Continue').click();
      cy.contains(`${sugar[i]}`).click();
      cy.contains('Continue').click();
      cy.contains(`${milkfat[i]}`).click();
      cy.contains('Continue').click();
      cy.contains(`${milkprotein[i]}`).click();
      cy.contains('Continue').click();
      cy.contains('Check your answers');
      cy.contains('Continue').click();
      cy.contains(`The Meursing additional code for a product with this composition is ${code[i]}.`);
      // check Start again button
      cy.contains('Start again').click();
      cy.contains('Look up a Meursing code');
    }
  });
  it('| meursing code e2e journeys | 3 options |', function() {
    cy.visit('/xi/meursing_lookup/steps/start');

    const starch = ['0 - 4.99', '5 - 24.99'];
    const sugar = ['0 - 4.99', '5 - 29.99'];
    const milkfat = ['85 or more', '85 or more'];
    const code = ['7780', '7786'];
    for (let i=0; i<starch.length; i++) {
      cy.get('a[role=\'button\']').click();
      cy.contains(`${starch[i]}`).click();
      cy.contains('Continue').click();
      cy.contains(`${sugar[i]}`).click();
      cy.contains('Continue').click();
      cy.contains(`${milkfat[i]}`).click();
      cy.contains('Continue').click();
      cy.contains('Check your answers');
      cy.contains('Continue').click();
      cy.contains(`The Meursing additional code for a product with this composition is ${code[i]}.`);
      // check Start again button
      cy.contains('Start again').click();
      cy.contains('Look up a Meursing code');
    }
  });
});
