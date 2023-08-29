describe('| 🛄 dcVAT.spec.js | Multiple VAT rate validations |', function() {
  it('UK service - Page Validation - Multiple VAT rates 🇮🇱 RoW-GB', function() {
    cy.visit('/duty-calculator/uk/8716109800/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Israel'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.contains('Which VAT rate is applicable to your trade?');
    cy.contains('There are 3 VAT rates applicable');
    cy.contains('VAT reduced rate 5%');
    cy.contains('VAT zero rate');
    cy.contains('Value added tax (20.0%)');
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Select one of the available options');
    cy.get('#steps-vat-vat-error')
        .contains('Select one of the available options');
    cy.get('#steps-vat-vat-hint > a[target=\'_blank\']')
        .should(
            'have.attr',
            'href',
        );

    cy.get('input#steps-vat-vat-field-error').click();
    cy.contains('Continue').click();
    cy.contains('Applicable VAT rate');
    cy.contains('VAT reduced rate 5%');
    cy.get('div:nth-of-type(6) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Which VAT rate is applicable to your trade?');
    cy.get('input#steps-vat-vat-vatr-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.get('input#steps-vat-vat-vatr-field').click();
    cy.contains('Continue').click();
    cy.contains('Applicable VAT rate');
    cy.contains('VAT reduced rate 5%');
    cy.get('.govuk-back-link').click();
    cy.contains('Which VAT rate is applicable to your trade?');
    cy.get('input#steps-vat-vat-vatz-field').click();
    cy.contains('Continue').click();
    cy.contains('Applicable VAT rate');
    cy.contains('VAT zero rate');
    cy.get('.govuk-back-link').click();
    cy.contains('Which VAT rate is applicable to your trade?');
    cy.get('input#steps-vat-vat-vatz-field')
        .parent()
        .find('input')
        .should('be.checked');
    cy.get('input#steps-vat-vat-vat-field').click();
    cy.contains('Continue').click();
    cy.contains('Applicable VAT rate');
    cy.contains('Value added tax (20.0%)');
    cy.get('.govuk-back-link').click();
    cy.contains('Which VAT rate is applicable to your trade?');
    cy.get('input#steps-vat-vat-vat-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.get('input#steps-vat-vat-vatr-field').click();
    cy.contains('Continue').click();
    cy.get('div:nth-of-type(6) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Which VAT rate is applicable to your trade?');
  });

  it('XI service - Page Validation - Multiple VAT rates 🇮🇱 RoW-GB', function() {
    cy.visit('/duty-calculator/xi/2934999090/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Israel'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.additionalCode('2501');
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    cy.contains('Which VAT rate is applicable to your trade?');
    cy.contains('There are 2 VAT rates applicable to the trade in this commodity code.');
    cy.contains('VAT zero rate');
    cy.contains('Value added tax (20.0%)');
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Select one of the available options');
    cy.get('#steps-vat-vat-error')
        .contains('Select one of the available options');
  });
});
