describe('🇪🇺 💡 Validating page titles tags - meta data -XI', function () {

    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('Landing Page - The Northern Ireland (EU) Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function () {
        cy.visit('/sections')
        cy.log(cy.title())
       cy.title().should('eq','The Northern Ireland (EU) Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')

    })
    it('Section Page - Live animals; animal products - The Northern Ireland (EU) Tariff - GOV.UK', function () {
        cy.visit('/sections/1')
        cy.log(cy.title())
        cy.title().should('eq','Live animals; animal products - The Northern Ireland (EU) Tariff - GOV.UK')

    })
    it('Chapter Page - Live animals - The Northern Ireland (EU) Tariff - GOV.UK', function () {
        cy.visit('/chapters/01')
        cy.log(cy.title())
        cy.title().should('eq','Live animals - The Northern Ireland (EU) Tariff - GOV.UK')

    })
    it('Headings Page - Live horses, asses, mules and hinnies - The Northern Ireland (EU) Tariff - GOV.UK', function () {
        cy.visit('/headings/0101')
        cy.log(cy.title())
        cy.title().should('eq','Live horses, asses, mules and hinnies - The Northern Ireland (EU) Tariff - GOV.UK')

    })
    it('Commodity Page - Commodity code 0101210000: Pure-bred breeding animals - The Northern Ireland (EU) Tariff - GOV.UK ', function () {
        cy.visit('/commodities/0101210000')
        cy.log(cy.title())
        cy.title().should('eq','Commodity code 0101210000: Pure-bred breeding animals - The Northern Ireland (EU) Tariff - GOV.UK')

    })


})