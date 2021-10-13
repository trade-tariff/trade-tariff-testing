/* eslint-disable max-len */
describe('🇬🇧 💡 UK | switchingLinks-UK | Switching Links |', function() {
  // --- HOTT-96 -------------
  it('Sections Page - Switching link & text available,forum links removed', function() {
    cy.visit('/sections');
    // check header has UK information
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');

    // check correct text is displayed on banner as per UK - If they are at risk
    cy.get('.tariff-breadcrumbs')
        .should('have.text', 'If you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland Online Tariff.');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');

    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');

    // Guidance link on UK page
    //      cy.get('.govuk-grid-row')
    //          .contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU')
    cy.get('.govuk-main-wrapper')
        .contains('if your goods are not ‘at risk’ of onward movement to the EU').click();
    cy.contains('Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU');

    cy.log(cy.title());
    cy.title().should('eq', 'Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU - GOV.UK');
    // return to UK page
    cy.go('back');
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // other sticky links removed
    cy.get('.govuk-template')
        .should('not.have.text', 'Get guidance on this product area:')
        .should('not.have.text', 'Classification of goods')
        .should('not.have.text', 'Discuss this chapter in the forums');
  });

  it('Chapters Page - switching link available,forum links removed', function() {
    cy.visit('/chapters/01');
    // check header has UK information
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');

    // other sticky links removed
    cy.get('.govuk-template ')
        .should('not.have.text', 'Get guidance on this product area:')
        .should('not.have.text', 'Classification of goods')
        .should('not.have.text', 'Discuss this chapter in the forums');
  });
  it('Headings Page - switching link available,forum links removed', function() {
    cy.visit('/headings/0101');
    // are we on the right page
    // check header has UK information
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');


    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    // other sticky links removed
    cy.get('.govuk-template ')
        .should('not.have.text', 'Get guidance on this product area:')
        .should('not.have.text', 'Classification of goods')
        .should('not.have.text', 'Discuss this chapter in the forums');
  });
  it('Commodity Page', function() {
    cy.visit('/commodities/0406103010');
    // are we on the right page
    // check header has UK information
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });
  it('Tools Page', function() {
    cy.visit('/tools');
    // check header has UK information
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });
  it('🚫 No Switching link on Quota Search Page', function() {
    cy.visit('/quota_search');
    // check header has UK information
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff').should('not.exist');
  });
  it('Certificate Search Page', function() {
    cy.visit('/certificate_search');
    // check header has UK information
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });
  it('Additional Code Search Page', function() {
    cy.visit('/additional_code_search');
    // check header has UK information
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });
  it('Chemical Search Page', function() {
    cy.visit('/chemical_search');
    // check header has UK information
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });
  it('A-Z Page', function() {
    cy.visit('/a-z-index/a');
    // check header has UK information
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });
});
