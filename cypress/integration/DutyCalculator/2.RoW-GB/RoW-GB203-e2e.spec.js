//🇻🇳 Vietnam to  🇬🇧 GB 
// Comm code :0702000007 - no Measure Units 

describe('|RoW-GB203-e2e.spec |🍅 China to 🇬🇧 GB  | 201-e2e.spec | ', function () {
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    let country = ["uk", "xi"]
    let pagetitles = ["UK Global Online Tariff", "Northern Ireland Online Tariff"]

    for (let i = 0; i < country.length; i++) {
        console.log(i)

        it(`🍅 - e2e RoW to GB 🇻🇳 Vietnam to 🇬🇧 GB - ${country[i]}`, function () {
            //select future date 
            cy.visit(`${country[i]}/0702000007/import-date`)
            //  cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=0702000007`)
            //page title 
            cy.contains(`${pagetitles[i]}`)
            //enter valid date
            cy.validDate()
            //select GB as country of destination
            cy.selectDestination('gb')
            //select Vietnam as Origin
            cy.originList({ value: 'Vietnam' })
            //customs value
            cy.customsValue({ monetary: '5000.50', shipping: '455.7533', cost: '4545.987654' })


            //Check your answers page 
            cy.contains('Check your answers')
            cy.contains('Commodity code')
            cy.contains('Date of import')
            cy.contains('Destination')
            cy.contains('Coming from')
            cy.contains('Customs value')

            cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('0702 00 00 07')
            cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('31 December 2021')
            cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('England, Scotland or Wales (GB)')
            cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Vietnam')
            cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('£10,002.24')

            //confirm
            cy.get('.govuk-button').click()

            //Final Page - duty page
            cy.contains('Import duty calculation')
            cy.contains('You are importing commodity')
            cy.contains('from Vietnam on 31 December 2021.')


            cy.contains('Details of your trade').click()
            cy.get('.govuk-details__text')
            cy.contains('Origin:')
            cy.contains('Commodity:')
            cy.contains('Import date:')
            cy.contains('Valuation of import:')
            //values
            cy.contains('0702 00 00 07')
            cy.contains('Cherry tomatoes')
            cy.contains('31 December 2021')
            cy.contains('£10,002.24')

            //information 
            cy.contains('Details of your trade')
            cy.get('.govuk-table__row')
            cy.contains('Data')
            cy.contains('Calculation')
            cy.contains('Value')
            //first row
            cy.contains('Valuation for import')
            cy.contains('Value of goods + freight + insurance costs')
            cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£10,002.24')
            //import duty 
            cy.contains('Import duty Third-country duty (UK)')
            cy.contains('8.00% * £10,002.24')

            cy.contains('Zero rate')
            cy.get('tr:nth-of-type(4) > td:nth-of-type(3)').contains('£800.18')
            //Last row 
            cy.contains('Duty Total')
            cy.get('tr:nth-of-type(4) > td:nth-of-type(3)').contains('£0.00')
            //Final Page 
            cy.contains('Import duty calculation')
            cy.contains('Option 1: Third-country duty')
            cy.contains('Option 2: Tariff preference')

        })

    }
})
