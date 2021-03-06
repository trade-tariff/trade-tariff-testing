// Suspensions in delta route 

describe('| Row-NI304f-delta.spec.js | 🔼 Delta Route | Suspensions rates UK and EU  | ', function () {

    it('RoW 🇵🇪 (Peru) - XI | 112 Autonomous tariff suspension | UK Tariff |', function () {
        cy.visit('/duty-calculator/xi/2903898045/import-date')
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(100)
        cy.otherOriginList({ value: 'Peru' })
        cy.wait(100)
        //Trader Scheme
        cy.traderScheme('yes')
        // ✅  Final use in NI - Yes 
        cy.finalUseNI('yes')
        //Planned processing - acceptable2 
        cy.plannedXI('acceptable2')
        //customs value
        cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('Option 1: Third-country duty')
        cy.contains('Third-country duty (UK)')
        cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.')

        cy.contains(' Option 2: Tariff preference - Peru')
        cy.contains('Tariff preference (UK)')
        cy.contains('UK preferential duties may be applied, as the difference between the UK preferential duty and the EU preferential duty is lower than 3% of the customs value of your trade.')

        cy.contains('Option 3: Autonomous tariff suspension')
        cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.')

        cy.contains('Option 4: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms')
        cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms (UK)')
        cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.')

    })
    //7606119125
    it('RoW 🇦🇩 (Andorra) - XI | 115 Autonomous suspension under end-use | UK Tariff |', function () {
        cy.visit('/duty-calculator/xi/3824999252/import-date')
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(100)
        cy.otherOriginList({ value: 'Andorra' })
        cy.wait(100)
        //Trader Scheme
        cy.traderScheme('yes')
        // ✅  Final use in NI - Yes 
        cy.finalUseNI('yes')
        //Planned processing - acceptable2 
        cy.plannedXI('acceptable2')
        //customs value
        cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('Option 1: Third-country duty')
        cy.contains('Third-country duty (UK)')
        cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.')

        cy.contains(' Option 2: Tariff preference - Andorra')
        cy.contains('Tariff preference (UK)')
        cy.contains('UK preferential duties may be applied, as the difference between the UK preferential duty and the EU preferential duty is lower than 3% of the customs value of your trade.')

        cy.contains('Option 3: Autonomous tariff suspension')
        cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.')

        cy.contains('Option 4: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms')
        cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms (UK)')
        cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.')

        cy.contains('Option 5: Airworthiness tariff suspension')
        cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.')

    })
    it('RoW 🇫🇴 (Faroe Islands) - XI |117 Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms ,119 Airworthiness tariff suspension | EU Tariff , UK Tariff  |', function () {
        cy.visit('/duty-calculator/xi/3824609100/import-date')
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(100)
        cy.otherOriginList({ value: 'Faroe Islands' })
        cy.wait(100)
        //Trader Scheme
        cy.traderScheme('yes')
        // ✅  Final use in NI - Yes 
        cy.finalUseNI('yes')
        //Planned processing - acceptable2 
        cy.plannedXI('acceptable2')
        //customs value
        cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
        //Import Quantity 
        cy.quantity({ dtn: '100' })
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('Option 1: Third-country duty')
        cy.contains('Third-country duty (EU)')
        cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.')

        cy.contains('Option 2: Tariff preference - Faroe Islands')
        cy.contains('Tariff preference (EU)')
        cy.contains('EU preferential duties may be applied, as the difference between the UK preferential duty and the EU preferential duty exceeds 3% of the customs value of your trade.')

        cy.contains('Option 3: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms')
        cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms (UK)')
        cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.')

        cy.contains('Option 4: Airworthiness tariff suspension')
        cy.contains('Airworthiness tariff suspension (UK)')
        cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.')
        //UK Tariffs 
        cy.get('.govuk-back-link').click()
        cy.get('div:nth-of-type(9) > .govuk-summary-list__actions > .govuk-link').click()
        //Import Quantity 
        cy.quantity({ dtn: '1' })
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('Option 1: Third-country duty')
        cy.contains('Third-country duty (UK)')
        cy.contains('Standard rate')
        cy.contains('20.00% * £1,079.00')
        cy.contains('£215.80')
        cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.')

        cy.contains(' Option 2: Tariff preference - Faroe Islands')
        cy.contains('Tariff preference (UK)')
        cy.contains('£203.80')
        cy.contains('20.00% * £1,019.00')
        cy.contains('UK preferential duties may be applied, as the difference between the UK preferential duty and the EU preferential duty is lower than 3% of the customs value of your trade.')

        cy.contains('Option 3: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms')
        cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms (UK)')
        cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.')
        cy.contains('20.00% * £1,000.00')
        cy.contains('£200.00')

        cy.contains('Option 4: Airworthiness tariff suspension')
        cy.contains('Airworthiness tariff suspension (UK)')
        cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.')


    })


})