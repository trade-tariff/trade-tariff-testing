describe('🧮 | dcPlannedProcessing.spec | Duty Calculator Planned Processing |', function() {
  it('Page Validation - RoW-GB ', function() {
    cy.visit('/duty-calculator/uk/1701141000/import-date');

    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('gb');
    cy.traderScheme('yes');
    cy.finalUse('yes');

    cy.turnOver('more');

    cy.contains('How will these goods be processed after they are moved into Northern Ireland?');
    cy.contains('If your goods are for sale to, or final use by, end consumers');
    cy.contains('The goods will not be subject to processing in Northern Ireland');
    cy.contains('The goods will undergo commercial processing for one of these purposes:');

    cy.contains('The goods will be processed for commercial purposes other than those listed above');

    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('Select one of the available options');

    cy.get('#steps-planned-processing-planned-processing-error')
        .contains('Select one of the available options');


    cy.get('input#steps-planned-processing-planned-processing-without-any-processing-field').check();
    cy.contains('Continue').click();
    cy.get('.govuk-back-link').click();
    cy.get('input#steps-planned-processing-planned-processing-without-any-processing-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.get('input#steps-planned-processing-planned-processing-commercial-processing-field').check();
    cy.contains('Continue').click();
    cy.get('.govuk-back-link').click();
    cy.get('input#steps-planned-processing-planned-processing-commercial-processing-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.get('input#steps-planned-processing-planned-processing-commercial-purposes-field').check();
    cy.contains('Continue').click();
    cy.get('.govuk-back-link').click();
    cy.get('input#steps-planned-processing-planned-processing-commercial-purposes-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.contains('Explore the topic');
    cy.contains('Additional requirements for when you bring goods into Northern Ireland for processing').click();
    cy.go('back');
    cy.contains('Apply to pay less duty on goods you import for specific uses').click();
    cy.contains('Apply to pay less duty on goods you import for specific uses');
  });

  it('Page Validation - RoW-NI ', function() {
    cy.visit('/duty-calculator/xi/1701141000/import-date');

    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('other');
    cy.otherOriginList({value: 'Morocco'});
    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');

    cy.contains('How will these goods be processed after they are moved into Northern Ireland?');
    cy.contains('If your goods are for sale to, or final use by');
    cy.contains('The goods will not be subject to processing in Northern Ireland');
    cy.contains('The goods will undergo commercial processing for one of these purposes:');
    cy.contains('The goods will be processed for commercial purposes other than those listed above');

    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('Select one of the available options');

    cy.get('#steps-planned-processing-planned-processing-error')
        .contains('Select one of the available options');

    cy.get('input#steps-planned-processing-planned-processing-without-any-processing-field').check();
    cy.contains('Continue').click();
    cy.get('.govuk-back-link').click();
    cy.get('input#steps-planned-processing-planned-processing-without-any-processing-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.get('input#steps-planned-processing-planned-processing-commercial-processing-field').check();
    cy.contains('Continue').click();
    cy.get('.govuk-back-link').click();
    cy.get('input#steps-planned-processing-planned-processing-commercial-processing-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.get('input#steps-planned-processing-planned-processing-commercial-purposes-field').check();
    cy.contains('Continue').click();
    cy.go('back');
    cy.get('input#steps-planned-processing-planned-processing-commercial-purposes-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.contains('Explore the topic');
    cy.contains('Additional requirements for when you bring goods into Northern Ireland for processing').click();
    cy.go('back');
    cy.contains('Apply to pay less duty on goods you import for specific uses').click();
    cy.contains('Apply to pay less duty on goods you import for specific uses');
  });
});
