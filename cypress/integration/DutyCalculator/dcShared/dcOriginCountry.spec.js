describe('🧮 | dcOriginCountry | Duty Calculator Origin Country selection page |',function() {

  Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

  it('ESW (GB) ', function () {
    cy.visit(`uk/0702000007/import-date`)
    
    cy.contains('UK Global Online Tariff')
    cy.validDate( )
   
    cy.contains('Which part of the UK are you importing into?')

     //select England ,Scotland or Wales (GB)
    cy.get('#wizard-steps-import-destination-import-destination-uk-field').check()
    cy.contains('Continue').click()
    cy.contains('Which country are the goods coming from?')
    
    cy.contains('The duty you are charged may be dependent on the country from which the goods are coming.')
    cy.contains('Enter the country of dispatch:')
    cy.contains('When autocomplete results are available, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.')

      //select country from list 
    cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
      .click().clear().wait(500)
      .type('United Kingdom (Northern Ireland)').wait(500)
    cy.contains('Continue').click()
    
  })
  it('Northern Ireland ', function () {
    cy.visit(`uk/0702000007/import-date`)
    cy.contains('UK Global Online Tariff')
    cy.validDate( )
   
    cy.contains('Which part of the UK are you importing into?')

     //select England ,Scotland or Wales (GB)
    cy.contains('England, Scotland or Wales (GB)')
    cy.contains('Northern Ireland')
    cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
    cy.contains('Continue').click()
     //two options - England ,Scotland or Wales ( GB)  / Ireland or other EU member states
    cy.contains('Which country are the goods coming from?')
    cy.contains('The duty you are charged may be dependent on the country from which the goods are coming.')
      //select GB
    cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
    cy.contains('Continue').click()
    cy.get('.govuk-back-link').click()
    //select Ireland or EU member states
    cy.get('input#wizard-steps-country-of-origin-country-of-origin-eu-field').click()
    cy.contains('Continue').click()
      
    // Placeholder for next page 

  })
  it('No country selected ',function(){
    cy.visit(`uk/0702000007/import-date`)
    cy.contains('UK Global Online Tariff')
    cy.validDate( )
    
    cy.contains('Which part of the UK are you importing into?')
    //select Northern Ireland as destination
    cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
    cy.contains('Continue').click()
    cy.contains('Which country are the goods coming from?')
    cy.contains('The duty you are charged may be dependent on the country from which the goods are coming.')
  
    //Continue without selecting any country from drop down menu
    cy.contains('Continue').click()
    cy.get('.govuk-error-summary')
    cy.contains('There is a problem')
    cy.contains('Enter a valid origin for this import')
    cy.get('.govuk-error-message')
        .contains('Enter a valid origin for this import')


    //change destination to GB
    cy.get('.govuk-back-link').click()
    cy.get('#wizard-steps-import-destination-import-destination-uk-field').check()
    cy.contains('Continue').click()
    cy.contains('Which country are the goods coming from?')
    cy.contains('Continue').click()
    cy.get('.govuk-error-summary')
    cy.contains('There is a problem')
    cy.contains('Enter a valid origin for this import')
    cy.get('.govuk-error-message')
        .contains('Enter a valid origin for this import')   

  })
})