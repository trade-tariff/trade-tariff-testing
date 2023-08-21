describe('validate document codes step and outcomes', function() {
  it('works as expected', function() {
    // given a commodity with document codes
    cy.visit('/duty-calculator/xi/1516209821/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('other');

    cy.otherOriginList({value: 'Canada'});
    cy.euDutiesApply();
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({tnei: '1'});

    cy.additionalCode({xi: 'B107'});
    cy.additionalCode({xi: 'B107'});

    // when we try to continue without selecting any document codes
    cy.contains('Do you have any of the following documents?');
    cy.contains('You may be able to reduce the duty applicable if you possess and can present one of the following documents.');
    cy.contains('Continue').click();

    // then we should see an error message
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Specify a valid option');
    cy.get('.govuk-error-message').contains('Specify a valid option');

    // when we pick a positive case for a document code which will filter in a suspension measure
    cy.docCode({xi: 'c990'});
    cy.contains('Continue').click();
    cy.docCode({xi: 'd008'});
    cy.contains('Continue').click();
    cy.docCode({xi: 'd008'});
    cy.contains('Continue').click();

    cy.vat('0');
    cy.contains('VAT zero rate');
    cy.contains('Document(s)');
    cy.contains('C990');
    cy.get('.govuk-button').click();

    // then we see the suspension measure as an option for our document codes
    cy.contains('Suspension - goods for certain categories of ships, ');

    // when we pick the negative case for a document code
    cy.get('.govuk-back-link').click();
    cy.get('a[href^="/duty-calculator/document-codes"]').contains('Change').click();
    cy.contains('Do you have any of the following documents?');
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.vat('0');
    cy.contains('VAT zero rate');
    cy.get('.govuk-grid-row').contains('Document(s)');
    cy.contains('n/a');
    cy.get('.govuk-grid-row').contains('C990').should('not.exist');
    cy.get('.govuk-button').click();

    // then we do not see a suspension measure as an option for our document code
    cy.should('not.contain', 'Suspension');
  });
});
