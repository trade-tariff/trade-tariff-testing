describe('🧮 | dcPlannedProcessing.spec | Duty Calculator Planned Processing |', function() {
  it('Page Validation - RoW-GB ', function() {
    cy.visit('/duty-calculator/uk/1701141000/import-date');

    cy.validDate();
    // NI Destination
    cy.selectDestination('xi');
    // United Kingdom as country of Origin
    cy.selectOrigin('gb');
    // Trader Scheme Registered - Yes
    cy.traderScheme('yes');
    // Final use in NI - Yes
    cy.finalUse('yes');

    cy.turnOver('more');

    cy.contains('How will these goods be processed after they are moved into Northern Ireland?');
    cy.contains('If your goods are for sale to, or final use by, end consumers in the United Kingdom, you may be able to declare goods as not \'at risk\', and pay no duty on those goods.');
    cy.contains('The goods will not be subject to processing in Northern Ireland');
    cy.contains('The goods will undergo commercial processing for one of these purposes:');

    cy.contains('the sale of food to end consumers in the UK');
    cy.contains('construction, where the processed goods form a permanent part of a structure that is constructed and located in NI by the importer');
    cy.contains('direct provision of health or care services by the importer in NI');
    cy.contains('not for profit activities in NI, where there is no subsequent sale of the processed good by the importer');
    cy.contains('the final use of animal feed on premises located in NI by the importer.');
    cy.contains('The goods will be processed for commercial purposes other than those listed above');

    // no values entered - error message
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('Select one of the available options');

    cy.get('#steps-planned-processing-planned-processing-error')
        .contains('Select one of the available options');


    // 1 .Select - The goods will not be subject to processing in Northern Ireland
    cy.get('input#steps-planned-processing-planned-processing-without-any-processing-field').check();
    cy.contains('Continue').click();
    // selection is persisted
    cy.get('.govuk-back-link').click().wait(300);
    cy.get('input#steps-planned-processing-planned-processing-without-any-processing-field')
        .parent()
        .find('input')
        .should('be.checked');

    // 2.Select - The goods will undergo commercial processing for one of these purposes:
    cy.get('input#steps-planned-processing-planned-processing-commercial-processing-field').check();
    cy.contains('Continue').click();
    // selection is persisted
    cy.get('.govuk-back-link').click().wait(300);
    cy.get('input#steps-planned-processing-planned-processing-commercial-processing-field')
        .parent()
        .find('input')
        .should('be.checked');

    // 3.Select - The goods will be processed for commercial purposes other than those listed above
    cy.get('input#steps-planned-processing-planned-processing-commercial-purposes-field').check();
    cy.contains('Continue').click();
    // selection is persisted
    cy.get('.govuk-back-link').click().wait(300);
    cy.get('input#steps-planned-processing-planned-processing-commercial-purposes-field')
        .parent()
        .find('input')
        .should('be.checked');

    // explore the topic
    cy.contains('Explore the topic');
    cy.contains('Additional requirements for when you bring goods into Northern Ireland for processing').click();
    cy.go(-1);
    cy.contains('Apply to pay less duty on goods you import for specific uses').click();
    cy.contains('Apply to pay less duty on goods you import for specific uses');
  });
  it('Page Validation - RoW-NI ', function() {
    cy.visit('/duty-calculator/xi/1701141000/import-date');

    cy.validDate();
    // NI Destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    // origin RoW
    cy.otherOriginList({value: 'Morocco'});
    // Trader Scheme Registered - Yes
    cy.traderScheme('yes');
    // Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover page
    cy.turnOver('more');

    cy.contains('How will these goods be processed after they are moved into Northern Ireland?');
    cy.contains('If your goods are for sale to, or final use by, end consumers in the United Kingdom, you may be able to declare goods as not \'at risk\', and pay no duty on those goods.');
    cy.contains('The goods will not be subject to processing in Northern Ireland');
    cy.contains('The goods will undergo commercial processing for one of these purposes:');

    cy.contains('the sale of food to end consumers in the UK');
    cy.contains('construction, where the processed goods form a permanent part of a structure that is constructed and located in NI by the importer');
    cy.contains('direct provision of health or care services by the importer in NI');
    cy.contains('not for profit activities in NI, where there is no subsequent sale of the processed good by the importer');
    cy.contains('the final use of animal feed on premises located in NI by the importer.');
    cy.contains('The goods will be processed for commercial purposes other than those listed above');

    // no values entered - error message
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('Select one of the available options');

    cy.get('#steps-planned-processing-planned-processing-error')
        .contains('Select one of the available options');


    // 1 .Select - The goods will not be subject to processing in Northern Ireland
    cy.get('input#steps-planned-processing-planned-processing-without-any-processing-field').check();
    cy.contains('Continue').click();
    // selection is persisted
    cy.get('.govuk-back-link').click().wait(300);
    cy.get('input#steps-planned-processing-planned-processing-without-any-processing-field')
        .parent()
        .find('input')
        .should('be.checked');

    // 2.Select - The goods will undergo commercial processing for one of these purposes:
    cy.get('input#steps-planned-processing-planned-processing-commercial-processing-field').check();
    cy.contains('Continue').click();
    // selection is persisted
    cy.get('.govuk-back-link').click().wait(300);
    cy.get('input#steps-planned-processing-planned-processing-commercial-processing-field')
        .parent()
        .find('input')
        .should('be.checked');

    // 3.Select - The goods will be processed for commercial purposes other than those listed above
    cy.get('input#steps-planned-processing-planned-processing-commercial-purposes-field').check();
    cy.contains('Continue').click();
    // selection is persisted
    cy.go(-1);
    // cy.get('.govuk-back-link').click().wait(300);
    cy.get('input#steps-planned-processing-planned-processing-commercial-purposes-field')
        .parent()
        .find('input')
        .should('be.checked');

    // explore the topic
    cy.contains('Explore the topic');
    cy.contains('Additional requirements for when you bring goods into Northern Ireland for processing').click();
    cy.go(-1);
    cy.contains('Apply to pay less duty on goods you import for specific uses').click();
    cy.contains('Apply to pay less duty on goods you import for specific uses');
  });
});
