
describe('| 🛃 📱 XI | meursingMobile | mobile version |', function() {
  it(`📱 iphone - meursing e2e journey`, function() {
    cy.viewport('iphone-6', 'landscape');
    cy.visit('/xi/meursing_lookup/steps/start');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('Search or browse the Tariff');
    cy.contains('A-Z');
    cy.contains('Help');
    cy.contains('Tools');
    const starch = ['0 - 4.99'];
    const sugar = ['5 - 29.99'];
    const milkfat = ['1.5 - 2.99'];
    const milkprotein = ['2.5 - 5.99'];
    const code = ['7121'];
    for (let i=0; i<starch.length; i++) {
      cy.get('a[role=\'button\']').click();
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search or browse the Tariff');
      cy.contains('A-Z');
      cy.contains('Help');
      cy.contains('Tools');
      cy.contains(`${starch[i]}`).click();
      cy.contains('Continue').click();
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search or browse the Tariff');
      cy.contains('A-Z');
      cy.contains('Help');
      cy.contains('Tools');
      cy.contains(`${sugar[i]}`).click();
      cy.contains('Continue').click();
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search or browse the Tariff');
      cy.contains('A-Z');
      cy.contains('Help');
      cy.contains('Tools');
      cy.contains(`${milkfat[i]}`).click();
      cy.contains('Continue').click();
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search or browse the Tariff');
      cy.contains('A-Z');
      cy.contains('Help');
      cy.contains('Tools');
      cy.contains(`${milkprotein[i]}`).click();
      cy.contains('Continue').click();
      cy.contains('Check your answers');
      cy.contains('Continue').click();
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search or browse the Tariff');
      cy.contains('A-Z');
      cy.contains('Help');
      cy.contains('Tools');
      cy.contains(`The Meursing additional code for a product with this composition is ${code[i]}.`);
      // check Start again button
      cy.contains('Start again').click();
      cy.contains('Look up a Meursing code');
    }
  });

  // android
  it(`📱 android - meursing e2e journey `, function() {
    cy.viewport('samsung-note9');
    cy.visit('/xi/meursing_lookup/steps/start');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('Search or browse the Tariff');
    cy.contains('A-Z');
    cy.contains('Help');
    cy.contains('Tools');
    const starch = ['0 - 4.99'];
    const sugar = ['5 - 29.99'];
    const milkfat = ['1.5 - 2.99'];
    const milkprotein = ['2.5 - 5.99'];
    const code = ['7121'];
    for (let i=0; i<starch.length; i++) {
      cy.get('a[role=\'button\']').click();
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search or browse the Tariff');
      cy.contains('A-Z');
      cy.contains('Help');
      cy.contains('Tools');
      cy.contains(`${starch[i]}`).click();
      cy.contains('Continue').click();
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search or browse the Tariff');
      cy.contains('A-Z');
      cy.contains('Help');
      cy.contains('Tools');
      cy.contains(`${sugar[i]}`).click();
      cy.contains('Continue').click();
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search or browse the Tariff');
      cy.contains('A-Z');
      cy.contains('Help');
      cy.contains('Tools');
      cy.contains(`${milkfat[i]}`).click();
      cy.contains('Continue').click();
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search or browse the Tariff');
      cy.contains('A-Z');
      cy.contains('Help');
      cy.contains('Tools');
      cy.contains(`${milkprotein[i]}`).click();
      cy.contains('Continue').click();
      cy.contains('Check your answers');
      cy.contains('Continue').click();
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search or browse the Tariff');
      cy.contains('A-Z');
      cy.contains('Help');
      cy.contains('Tools');
      cy.contains(`The Meursing additional code for a product with this composition is ${code[i]}.`);
      // check Start again button
      cy.contains('Start again').click();
      cy.contains('Look up a Meursing code');
    }
  });
});
