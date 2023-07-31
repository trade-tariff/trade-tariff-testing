// e2e journey for Alcohol duties calculation on a commodity with only ASVX measurement unit component X321 Antigua and Barbuda to UK
describe('| Row-NI321-onlyASVX-e2e.spec | AlcoholDuties X321|', function() {
    it(' RoW Antigua and Barbuda - Northern Ireland - Alcohol duties calculations ', function() {
        cy.visit('/duty-calculator/xi/2203000100/import-date');
        //new function
        cy.validFutureDate(); 
        cy.selectDestination('xi');
        cy.selectOrigin('other');
        cy.otherOriginList({value: 'Antigua and Barbuda'});
        cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
        cy.alcoholImportQuantity({asv: '3.5',ltr: '100', spr: '3'});//commented out text verifications 206 and 207
        cy.exciseCode('321');
        cy.contains('Excise additional code');
        cy.contains('321');
        cy.get('.govuk-button').click();
        cy.contains('Option 1: Third-country duty');
      //cy.contains('Option 2: Tariff preference - Antigua and Barbuda');
    
      
      // first row
        cy.contains('Valuation for import');
        cy.contains('Value of goods + freight + insurance costs');
        cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£1,000.00');

      // import duty
      cy.contains('Import duty Third-country duty (UK)');
      cy.contains('0.00% * £1,000.00');
      cy.get('tr:nth-of-type(2) > td:nth-of-type(3)').contains('0');
    //Excise
      cy.contains('Excise');
      cy.contains('Beer at least 3.5 but less than 8.5%');
      cy.contains('21.01 GBP / % vol/hl');
      cy.get('tr:nth-of-type(3) > td:nth-of-type(3)').contains('£73.54');
    //VAT
      cy.contains('VAT Standard rate');
      cy.contains('20.00% * £1,073.54');
      cy.get('tr:nth-of-type(4) > td:nth-of-type(3)').contains('£214.71');

    // Last row
      cy.contains('Duty Total');
      cy.get('tr:nth-of-type(5) > td:nth-of-type(3)').contains('£288.24')
       
  
    });   
    it(' RoW Antigua and Barbuda - Northern Ireland  - Alcohol duties calculations ', function() {
      cy.visit('/duty-calculator/uk/2203000100/import-date');
      cy.validFutureDate(); //new
      cy.selectDestination('xi');
      cy.selectOrigin('other');
      cy.otherOriginList({value: 'Antigua and Barbuda'});
      cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
      cy.alcoholImportQuantity({asv: '8.5',ltr: '100', spr: '3'});//commented out text verifications 206 and 207
      cy.exciseCode('321');
      cy.contains('Excise additional code');
      cy.contains('321');
      cy.get('.govuk-button').click();
      cy.contains('Option 1: Third-country duty');
    //cy.contains('Option 2: Tariff preference - Antigua and Barbuda');
    // cy.verifyExciseMeasureType('321' + exciseCode);
    
    // first row
      cy.contains('Valuation for import');
      cy.contains('Value of goods + freight + insurance costs');
      cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£1,000.00');
      
     
  
    // import duty
    cy.contains('Import duty Third-country duty (UK)');
    cy.contains('0.00% * £1,000.00');
    cy.get('tr:nth-of-type(2) > td:nth-of-type(3)').contains('0');
  //Excise
    cy.should('not.contain', 'Excise');
    
   //VAT
    cy.contains('VAT Standard rate');
    cy.contains('20.00% * £1,000.00');
    cy.get('tr:nth-of-type(4) > td:nth-of-type(3)').contains('£200.00');

 // Last row
   cy.contains('Duty Total');
   cy.get('tr:nth-of-type(4) > td:nth-of-type(3)').contains('£200.00')
    }); 
});
