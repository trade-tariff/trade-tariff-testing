describe('🔖 | dcCertificateOfOrigin | UK Certificate of Origin page |', function() {
  it('Page Validation', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');

    cy.contains('UK Integrated Online Tariff');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('gb');
    cy.traderScheme('no');

    // Certificate of Origin
    cy.contains('Do you have a valid proof of preferential origin?');
    cy.contains('If you have a valid Certificate of Origin proving that your goods were materially manufactured in the UK, then you are eligible to take advantage of the 0% customs duties made available under the UK / EU Trade and Cooperation Agreement.');

    cy.contains('Yes, I have a valid Certificate of Origin');
    cy.contains('No, I do not have a valid Certificate of Origin');

    // Select Yes, valid Certificate of Origin
    cy.get('input#steps-certificate-of-origin-certificate-of-origin-yes-field').check();
    cy.contains('Continue').click();

    // selection is persisted
    cy.go(-1);
    cy.get('input#steps-certificate-of-origin-certificate-of-origin-yes-field')
        .parent()
        .find('input')
        .should('be.checked');

    // Select No,valid Certificate of Origin
    cy.get('input#steps-certificate-of-origin-certificate-of-origin-no-field').check();
    cy.contains('Continue').click();
    // selection is persisted
    cy.go(-1);
    cy.get('input#steps-certificate-of-origin-certificate-of-origin-no-field')
        .parent()
        .find('input')
        .should('be.checked');
    // No Values Selected
    cy.go(-1);
    cy.contains('Continue').click();
    cy.contains('Do you have a valid proof of preferential origin?');
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Select one of the two options');
    cy.get('#steps-certificate-of-origin-certificate-of-origin-error')
        .contains('Select one of the two options');
  });
});
