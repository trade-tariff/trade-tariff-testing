// e2e journey for Alcohol duties calculation on a commodity with only LPA measurement unit component X301 Antigua and Barbuda to UK
describe('| Row-NI301-onlyLPA-e2e.spec | AlcoholDuties X301|', function() {
    it(' RoW Antigua and Barbuda - Northern Ireland - Alcohol duties calculations ', function() {
        cy.visit('/duty-calculator/xi/2208701000/import-date');
        //new function
        cy.validFutureDate(); 
        cy.selectDestination('xi');
        cy.selectOrigin('other');
        cy.otherOriginList({value: 'Antigua and Barbuda'});
        cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
        cy.alcoholImportQuantity({lpa: '100', asv: '1.2', spr: '3'}); //commented out text verifications 206 and 207
        cy.exciseCode('301');
        cy.contains('Excise additional code');
        cy.contains('301');
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
        cy.contains('Low Alcohol - not exc 1.2%');
        cy.contains('9.27 GBP / l alc. 100%');
        cy.get('tr:nth-of-type(3) > td:nth-of-type(3)').contains('£927.00');
      //VAT
        cy.contains('VAT Standard rate');
        cy.contains('20.00% * £1,927.00');
        cy.get('tr:nth-of-type(4) > td:nth-of-type(3)').contains('£385.40');
  
      // Last row
        cy.contains('Duty Total');
        cy.get('tr:nth-of-type(5) > td:nth-of-type(3)').contains('£1,312.40')
  
        
  
    });   
    it(' RoW Antigua and Barbuda - Northern Ireland  - Alcohol duties calculations ', function() {
      cy.visit('/duty-calculator/uk/2208701000/import-date');
      cy.validFutureDate(); //new
      cy.selectDestination('xi');
      cy.selectOrigin('other');
      cy.otherOriginList({value: 'Antigua and Barbuda'});
      cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
      cy.alcoholImportQuantity({lpa: '100', asv: '1.21', spr: '3'}); //commented out text verifications 206 and 207
      cy.exciseCode('301');
      cy.contains('Excise additional code');
      cy.contains('301');
      cy.get('.govuk-button').click();
      cy.contains('Option 1: Third-country duty');
    //cy.contains('Option 2: Tariff preference - Antigua and Barbuda');
    // cy.verifyExciseMeasureType('301' + exciseCode);
    
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
      cy.get('tr:nth-of-type(4) > td:nth-of-type(3)').contains('£200');
  
    // Last row
      cy.contains('Duty Total');
      cy.get('tr:nth-of-type(4) > td:nth-of-type(3)').contains('£200.00')
  
     
  
    }); 
});
