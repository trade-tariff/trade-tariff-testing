describe('UK - smoke test to cover basic functionality on UK services ',function(){
    Cypress.config('baseUrl')
        it('UK Routing - Correct page + Legal base does not exist ', function () {

            cy.visit('/commodities/0101210000#import')
               cy.contains('The Online Trade Tariff')
            cy.get('.govuk-tabs__panel')
            cy.contains('Legal base').should('not.exist')
        })
        it('UK - Header Section-Sub sections ', function () {
            cy.visit('/sections')
            cy.title().should('eq','The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')

            cy.get('.govuk-header ')
            cy.contains('Search the Tariff')
            cy.contains('A-Z')
            cy.contains('Tools')
            cy.contains('Additional code').should('not.exist')
            cy.contains('Certificate').should('not.exist')
            cy.contains('Footnotes').should('not.exist')
            cy.contains('Quotas').should('not.exist')
            cy.contains('CAS').should('not.exist')
            cy.contains('Exchange rates').should('not.exist')
            cy.contains('Forum').should('not.exist')
        })
        it('UK - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function () {
            cy.visit('/sections')
            cy.get('.govuk-footer')
            cy.contains('API Documentation')
            cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

        })
        it('UK - Sections Page - Switching link to XI available & works', function () {
            cy.visit('/sections')
            cy.get('.govuk-main-wrapper')
                .should('be.visible', 'Switch to the ')
                .should('be.visible', 'The Online Trade Tariff')
            cy.get('main#content  nav  a').click()
            cy.contains('The Northern Ireland (EU) Tariff')
            cy.get('main#content  nav  a').click()
            cy.contains('The Online Trade Tariff')

        })
    })