 
// Meursing code page validations
describe('| dcMeursingCode.spec.js | Meursing Code page validations | ', function() {
  it('Meursing code page validations |', function() {
    cy.visit('/duty-calculator/xi/1905311100/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list

    cy.otherOriginList({value: 'Andorra'});

    // Trader Scheme
    cy.traderScheme('no');
    // // ✅  Final use in NI - Yes
    // // turnover <£500,000 - NO
    // // Planned processing - acceptable1
    cy.euDutiesApply();
    cy.contains('Enter a \'Meursing code\' to work out applicable duties');
    cy.contains('This commodity code features duties which may be dependent on the sugar, flour, milk fat and milk protein content. To fully define the applicable duties, you need to specify the additional code that defines the content of these ingredients.');
    cy.contains('Enter the 3-digit additional code');
    cy.contains('If you know the additional code for your commodity, enter it in the box below. If you do not know the code, then use the ');
    // page link to meursing calculator
    //  cy.get('span#steps-meursing-additional-code-meursing-additional-code-hint > .govuk-link').should('have.attr', 'href', 'https://www.trade-tariff.service.gov.uk/xi/meursing_lookup/steps/start');

    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    // Error Message Capture
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Specify a valid 3-digit Meursing additional code');
    cy.get('.govuk-error-message').contains('Specify a valid 3-digit Meursing additional code');
    cy.get('.govuk-back-link').click();
    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    // text as meursing code
    cy.meursingCode({value: 'code'});
    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    // Specify a valid 3-digit Meursing additional code
    // Error Message
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Specify a valid 3-digit Meursing additional code');
    cy.get('.govuk-error-message').contains('Specify a valid 3-digit Meursing additional code');
    cy.get('.govuk-back-link').click();
    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    // enter invalid code
    // text as meursing code
    cy.meursingCode({value: '999'});
    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    // Specify a valid 3-digit Meursing additional code
    // Error Message
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter a valid Meursing code');
    cy.get('.govuk-error-message').contains('Enter a valid Meursing code');
    cy.get('.govuk-back-link').click();
    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    // enter a valid code
    cy.meursingCode({value: '000'});
    cy.contains('What is the customs value of this import?');
  });
});
