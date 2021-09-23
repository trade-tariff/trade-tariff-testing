/* eslint-disable max-len */
describe('meursingPages | Page validations |', function() {
  it(' Start page |  text and links |', function() {
    cy.visit('/xi/tools');
    cy.contains('Meursing code finder').click();
    cy.contains('Look up a Meursing code');
    cy.visit('/xi/meursing_lookup/steps/start');
    cy.contains('Look up a Meursing code');
    cy.contains('If you are moving a product into Northern Ireland or the European Union that is subject to duties which are dependent on the percentage content of sugar, flour, milk starch and milk solids, then you may be required to enter a 4-digit code (beginning with 7) called a \'Meursing code\' on your import declaration.');
    cy.contains('Use this service to help you to work out your Meursing code.');
    cy.contains('What you need to know');
    cy.contains('In order to correctly identify the Meursing code for your commodity, you will need to know the percentage content by weight of:');
    cy.get('.govuk-list.govuk-list--bullet').contains('milk fat');
    cy.get('.govuk-list.govuk-list--bullet').contains('milk proteins');
    cy.get('.govuk-list.govuk-list--bullet').contains('starch or glucose');
    cy.get('.govuk-list.govuk-list--bullet').contains('sucrose, invert sugar, isoglucose');
    // document links - check links are woking
    cy.contains('Documents to download');
    cy.contains('Meursing table (PDF) [opens in new window]');
    cy.contains('Meursing table (ODT) [opens in new window]');

    // start button works and takes to right page
    cy.get('a[role=\'button\']').click();
    cy.contains('How much starch or glucose does the product contain?');
  });
  it.only('Stach, Sucrose, Milk fat, Milk protein pages', function() {
    cy.visit('/xi/tools');
    cy.contains('Meursing code finder').click();
    // start button works and takes to right page
    cy.get('a[role=\'button\']').click();
    // 1.Starch page
    cy.contains('How much starch or glucose does the product contain?');
    cy.contains('Continue').click();
    // Error message when code NOT selected
    cy.get('.govuk-error-summary')
        .contains('Enter how much starch or glucose the product contains');
    cy.get('.govuk-error-message')
        .contains('Enter how much starch or glucose the product contains');
    cy.get('div:nth-of-type(1) > input[name=\'meursing_lookup_steps_starch[starch]\']').click();
    cy.contains('Continue').click();
    // 2.Sucrose page
    cy.contains('How much sucrose, invert sugar or isoglucose does the product contain?');
    cy.contains('Continue').click();
    // Error message when code NOT selected
    cy.get('.govuk-error-summary')
        .contains('Enter how much sucrose, invert sugar or isoglucose the product contains');
    cy.get('.govuk-error-message')
        .contains('Enter how much sucrose, invert sugar or isoglucose the product contains');
    cy.get('div:nth-of-type(1) > input[name=\'meursing_lookup_steps_sucrose[sucrose]\']').click();
    cy.contains('Continue').click();
    // 3.Milk fat page
    cy.contains('How much milk fat does the product contain?');
    cy.contains('The values represent % by weight');
    cy.contains('Continue').click();
    // Error message when code NOT selected
    cy.get('.govuk-error-summary')
        .contains('Enter how much milk fat the product contains');
    cy.get('.govuk-error-message')
        .contains('Enter how much milk fat the product contains');
    cy.get('div:nth-of-type(1) > input[name=\'meursing_lookup_steps_milk_fat[milk_fat]\']').click();
    cy.contains('Continue').click();
    // 4.Milk Protein page
    cy.contains('How much milk protein does the product contain?');
    cy.contains('Continue').click();
    // Error message when code NOT selected
    cy.get('.govuk-error-summary')
        .contains('Please pick one of the milk protein options');
    cy.get('.govuk-error-message')
        .contains('Please pick one of the milk protein options');
    cy.get('div:nth-of-type(1) > input[name=\'meursing_lookup_steps_milk_protein[milk_protein]\']').click();
    cy.contains('Continue').click();
    // Review page
    cy.contains('Check your answers');
    cy.contains('Starch or glucose content');
    cy.contains('Sucrose, invert sugar or isoglucose content');
    cy.contains('Milk fat content');
    cy.contains('Milk protein content');
    // Meursing code page
    cy.contains('Continue').click();
    cy.contains('Your Meursing code');
    cy.contains('The Meursing additional code for a product with this composition is 7000.');
    cy.contains('What next');
    cy.contains('Use these four digits together with the ten-digit commodity code from Trade Tariff to work out duties applicable to certain complex agri-foods on the the Northern Ireland Tariff, when your import is considered to be \'at risk\'.');
    // Change values and check code
    cy.get('.govuk-back-link').click();
    cy.contains('Check your answers');
    // Change 
    cy.get('div:nth-of-type(1) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('How much starch or glucose does the product contain?');
    cy.get('div:nth-of-type(2) > input[name=\'meursing_lookup_steps_starch[starch]\']').click();
    cy.contains('Continue').click();
    cy.get('div:nth-of-type(2) > input[name=\'meursing_lookup_steps_sucrose[sucrose]\']').click();
    cy.contains('Continue').click();
    cy.get('div:nth-of-type(2) > input[name=\'meursing_lookup_steps_milk_fat[milk_fat]\']').click();
    cy.contains('Continue').click();
    cy.get('div:nth-of-type(2) > input[name=\'meursing_lookup_steps_milk_protein[milk_protein]\']').click();
    cy.contains('Continue').click();
    cy.contains('Check your answers');
    cy.contains('Continue').click();
    cy.contains('The Meursing additional code for a product with this composition is 7126.');

    // check Start again button
    cy.get('.govuk-grid-column-two-thirds > a')
  });
});
