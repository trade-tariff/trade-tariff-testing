describe.skip('🧮 Duty Calculator main page ',function() {
    Cypress.config('baseUrl', Cypress.config('services')['dutycalculator'])
// skip some tests if the pack gets bigger
    it(' ➕📅  Valid Date', function () {
        cy.visit('/')
        cy.DCMainPage()
        cy.get('#wizard_steps_import_date_import_date_3i').click().type('29')
        cy.get('#wizard_steps_import_date_import_date_2i').click().type('04')
        cy.get('#wizard_steps_import_date_import_date_1i').click().type('2021')
        cy.contains('Continue').click()
        cy.contains('Import Destination Placeholder Page')
    })
    it('➖📅 Invalid date - Past Date ', function () {
        cy.visit('/')

        cy.get('#wizard_steps_import_date_import_date_3i').click().type('01')
        cy.get('#wizard_steps_import_date_import_date_2i').click().type('01')
        cy.get('#wizard_steps_import_date_import_date_1i').click().type('2021')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid, future date')
        cy.get('.govuk-error-message')
        cy.contains('Enter a valid, future date')

        //check if it allows user to enter correct date ( leap year 2024)
        cy.get('input[name=\'wizard_steps_import_date[import_date(3i)]\']').click().type('29')
        cy.get('input[name=\'wizard_steps_import_date[import_date(2i)]\']').click().type('02')
        cy.get('input[name=\'wizard_steps_import_date[import_date(1i)]\']').click().type('3024')
        cy.contains('Continue').click()
        cy.contains('Import Destination Placeholder Page')


    })
    it('➖📅 Invalid date - No Date ', function () {
        cy.visit('/')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid, future date')
        cy.get('.govuk-error-message')
        cy.contains('Enter a valid, future date')
    })
    it('➖📅 Invalid date - Text  ', function () {
        cy.visit('/')
        cy.get('#wizard_steps_import_date_import_date_3i').click().type('dd')
        cy.get('#wizard_steps_import_date_import_date_2i').click().type('mm')
        cy.get('#wizard_steps_import_date_import_date_1i').click().type('yyyy')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid, future date')
        cy.get('.govuk-error-message')
        cy.contains('Enter a valid, future date')
    })
    it('🔗 Verify Page links ',function(){
        cy.visit('/')
        cy.get('.govuk-header__navigation ')
        cy.contains('Search or browse the Tariff').click()
        cy.MainPageUK()
        cy.visit('/')
        cy.get('.govuk-header__navigation ')
        cy.contains('A-Z').click()
        cy.contains('A–Z of Classified Goods')
        cy.visit('/')
        cy.contains('Tools').click()
        cy.contains('Tariff tools')

    })
    it('🔖 Commodity Details ',function(){
        cy.visit('/')
        cy.contains('Back').click()
        //☀️ Validate commodity page
        cy.visit('/')
        //About this commodity code
       // cy.get('.govuk-details__summary-text')

        cy.get('.govuk-details > .govuk-details__summary')
        cy.contains('About this commodity code').click()
        cy.get('.govuk-details__text')
        cy.contains('Commodity code')
        cy.contains('0101210000')
        cy.contains('Pure-bred breeding animals')
        cy.contains('View commodity 0101210000').click()
        //☀️ Validate commodity page

    })
})
//check text color: #d4351c