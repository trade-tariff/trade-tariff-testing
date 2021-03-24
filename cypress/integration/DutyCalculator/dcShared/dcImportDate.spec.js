
describe('🧮 📅 | dcImportDate | Duty Calculator main page |',function() {
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
// /import-date?referred_service=uk&commodity_code=0702000007
    let country = ["uk","xi"]
    
    for (let i =0;i<country.length;i++){
        console.log(i)

    it('📅 Valid Date', function () {
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=0702000007`)
        cy.contains('Trade Tariff Duty Calculator')
        cy.DCMainPage()
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
    })

    it('📅 Invalid date - Past Date -> Date persists -> enter valid date ', function () {
        cy.visit('import-date?referred_service=${country[i]}&commodity_code=0702000007')
        cy.contains('Trade Tariff Duty Calculator')
        cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type('11')
        cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type('12')
        cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type('2020')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid future date')
        cy.get('.govuk-error-message')
        .contains('Enter a valid future date')

        // 30th February ?

        //date entered persists after error message only if valid format date and in past *
        cy.get('#wizard-steps-import-date-import-date-field-error') .should('have.value', '11')
        cy.get('#wizard_steps_import_date_import_date_2i') .should('have.value', '12')
        cy.get('#wizard_steps_import_date_import_date_1i') .should('have.value', '2020')

        //check if it allows user to enter correct date ( leap year 2024)
        cy.get('input[name=\'wizard_steps_import_date[import_date(3i)]\']').click().clear().type('29')
        cy.get('input[name=\'wizard_steps_import_date[import_date(2i)]\']').click().clear().type('02')
        cy.get('input[name=\'wizard_steps_import_date[import_date(1i)]\']').click().clear().type('3024')
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')


    })
    it('📅 No Date ', function () {
        cy.visit('import-date?referred_service=${country[i]}&commodity_code=0702000007')
        cy.contains('Trade Tariff Duty Calculator')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid future date')
        cy.get('.govuk-error-message')
        cy.contains('Enter a valid future date')
    })
    it('📅 Invalid date - Text  ', function () {
        cy.visit('import-date?referred_service=${country[i]}&commodity_code=0702000007')
        cy.contains('Trade Tariff Duty Calculator')
        cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type('dd')
        cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type('mm')
        cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type('yyyy')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid future date')
        cy.get('.govuk-error-message')
        cy.contains('Enter a valid future date')
    })
    it('🔗 Verify Page links ',function(){
        cy.visit('import-date?referred_service=${country[i]}&commodity_code=0702000007')
        cy.get('.govuk-header__link')
            .contains('Search or browse the Tariff').click()
        cy.wait(500)
      //  cy.MainPageUK()
        //DC main page
        cy.visit('import-date?referred_service=${country[i]}&commodity_code=1704101000')
        cy.contains('Trade Tariff Duty Calculator')
        cy.get('.govuk-header__navigation ')
        cy.contains('A-Z').click()
        cy.contains('A–Z of Classified Goods')
        cy.get('.govuk-header ').contains(`UK Global Online Tariff`)
        //DC main page
        cy.visit('import-date?referred_service=${country[i]}&commodity_code=0702000007')
        cy.contains('Trade Tariff Duty Calculator')
        cy.contains('Tools').click()
        cy.get('.govuk-header ').contains(`UK Global Online Tariff`)
        cy.contains('Tariff tools')

    })
    it('🔖 Commodity Details ',function(){
        cy.visit('import-date?referred_service=${country[i]}&commodity_code=0702000007')
        cy.contains('Trade Tariff Duty Calculator')
        //Back button - GDS style back link
        cy.contains('Back').click()
        //Validate commodity page
        cy.contains('Commodity information for 0702000007')


        cy.visit('import-date?referred_service=${country[i]}&commodity_code=0702000007')
        //About this commodity code
    
        cy.get('.govuk-details > .govuk-details__summary')
        cy.contains('About this commodity code').click()
        cy.get('.govuk-details__text')
        cy.contains('Commodity code')
        cy.contains('0702000007')
        cy.contains('Cherry tomatoes')
        
        cy.contains('View commodity 0702000007').click()
        //☀️ Validate commodity page
        cy.contains('Commodity information for 0702000007')
        cy.get('.govuk-header ').contains(`UK Global Online Tariff`)
        cy.go(-1)
        cy.contains('Trade Tariff Duty Calculator')    

    })
}

})
//check text color: #d4351c