describe('🧮 | dcMeasureAmount.spec | Measure Amount - page |', function() {
  it('Commodity with Kilos', function() {
    cy.visit('/duty-calculator/uk/1701141000/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Singapore'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Page validation
    cy.contains('Enter import quantity');
    cy.contains('The duties payable on this commodity are dependent on the quantity, weight or volume of goods that you are importing. Enter the units of the goods that you are importing in the boxes below.');
    cy.contains('What is the weight net of the standard quality of the goods you will be importing?');
    cy.contains('Enter the value in kilograms');
    cy.contains('Enter the value in tonnes (1,000 kg)');
    cy.contains('Enter the value in decatonnes (10,000 kg), corrected according to polarisation');
    // explore this topic
    cy.contains('Explore the topic');
    cy.contains('Valuation of imported goods for customs purposes, VAT and trade statistics').click();
    cy.contains('Working out the customs value of your imported goods');
    cy.go(-1);
    cy.contains('Enter import quantity');

    // No Values entered
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Enter a valid import quantity. Enter the value in kilograms');
    cy.contains('Enter a valid import quantity. Enter the value in tonnes (1,000 kg)');
    cy.contains('Enter a valid import quantity. Enter the value in decatonnes (10,000 kg), corrected according to polarisation');
    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // text values entered
    cy.quantity({tne: 'aaaa', kgm: 'jjjj', dap: 'bbbb'});
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter a numeric import quantity. Enter the value in kilograms');
    cy.contains('Enter a numeric import quantity. Enter the value in tonnes (1,000 kg)');
    cy.contains('Enter a numeric import quantity. Enter the value in decatonnes (10,000 kg), corrected according to polarisation');
    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // negative values entered
    cy.quantity({tne: -999, kgm: -888, dap: -4.989});
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter an import quantity value greater than zero. Enter the value in kilograms');
    cy.contains('Enter an import quantity value greater than zero. Enter the value in tonnes (1,000 kg)');
    cy.contains('Enter an import quantity value greater than zero. Enter the value in decatonnes (10,000 kg), corrected according to polarisation');
    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // Valid inputs given
    cy.quantity({tne: '1', kgm: '1', dap: '1'});
    // Select Document Code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // Select Document Code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.confirmPage();
  });
  it('Commodity with Litres', function() {
    cy.visit('/duty-calculator/uk/2208401100/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Singapore'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Page validation
    cy.contains('What is the alcohol percentage (%) of the goods you are importing?');
    // No Value entered
    cy.contains('Continue').click();

    cy.contains('Enter a valid import quantity. Enter the alcohol by volume (ABV) percentage');
    cy.contains('Enter a valid import quantity. Enter the value in litres');
    cy.get('.govuk-error-summary').contains('There is a problem');

    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // Text valuesentered
    cy.quantity({asv: 'aaaaaa'});
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter a numeric import quantity. Enter the alcohol by volume (ABV) percentage');

    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // Negative values entered
    cy.quantity({asv: -999, ltr: -777});
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter an import quantity value greater than zero. Enter the value in litres');
    cy.contains('Enter a valid import quantity. Enter the value in litres');
    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // valid inputs entered
    cy.quantity({asv: 1000, ltr: 2345.987, lpa: 2});
    // Excise code
    cy.exciseCode('451');
    cy.confirmPage();
  });
  it('Commodity with Items', function() {
    cy.visit('/duty-calculator/uk/9102990000/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Singapore'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Page validation
    cy.contains('How many items will you be importing?');
    cy.contains('Enter the number of items');
    // No Value entered
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter a valid import quantity. Enter the number of items');
    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // Text values entered
    cy.quantity({nar: 'erwrewr'});
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter a numeric import quantity. Enter the number of items');
    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // Negative value
    cy.quantity({nar: -999.9876});
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter an import quantity value greater than zero. Enter the number of items');
    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // valid inputs entered
    cy.quantity({nar: 1000});
    cy.confirmPage();
  });

  it('Commodity with Thousands of Items', function() {
    cy.visit('/duty-calculator/uk/0407191900/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Singapore'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Page validation
    cy.contains('How many items will you be importing?');
    cy.contains('Enter the number of items');
    // No Value entered
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter a valid import quantity. Enter the number of items');
    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // Text values entered
    cy.quantity({mil: 'erwrewr'});
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter a numeric import quantity. Enter the number of items');
    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // Negative value
    cy.quantity({mil: -999.9876});
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Enter an import quantity value greater than zero. Enter the number of items');
    cy.get('.govuk-back-link').click();
    cy.contains('Continue').click();
    // valid inputs entered
    cy.quantity({mil: 1000});
    cy.confirmPage();
  });
});
